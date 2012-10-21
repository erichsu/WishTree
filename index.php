<?php

function calDistance($db, $srcX, $srcY, $destX, $destY) {
    return sqrt(pow(abs($srcX-$destX), 2) + pow(abs($srcY-$destY), 2));
}

function findBestBusStop($db, $x, $y) {
    $sql = "select id, name, lat, lon from bus;";
    $result = $db->query($sql);
    
    $bestStop = null;
    $bestScore = 0;
    $currScore = 0;
    foreach ($result as $currStop) {
        if ($bestStop == null) {
            $bestStop = $currStop;
            $bestScore = calDistance($db, $x, $y, $currStop['lat'], $currStop['lon']);
        } else if ($bestScore > ($currScore = calDistance($db, $x, $y, $currStop['lat'], $currStop['lon']))) {
            $bestScore = $currScore;
            $bestStop = $currStop;
        }
    }

    $bestStop['score'] = $bestScore;

    return $bestStop;
}

function fulfillYourWishes($db, $keys, $lat, $long) {
    $initRank = 1.0;
    $keyRatio = 1.5;
    $locRatio = 1.2;
    $matches = array();
    $distances = array();
//	$db = new PDO("sqlite:/Users/Eric/Sites/WishTree/ptt.db");
//	print_r($db->query("select * from bus;"));
    foreach ($keys as $key) {
        $articles = $db->query("select url from article where title like '%" . $key . "%' and location != 5");
        foreach ($articles as $article) {
            if (!array_key_exists($article['url'], $matches)) {
                $matches[$article['url']] = $initRank * $keyRatio;
            } else {
                $matches[$article['url']] = $matches[$article['url']] * $keyRatio;
            }
        }
    }
//    print_r($matches);

    $urls = array_keys($matches);
    foreach ($matches as $url => $score) {
        $baseSQL = "select b.name, b.lat, b.long from article as a, location as b where a.url='" . $url . "' and a.location = b.location_id";
        //die($baseSQL);
        $result = $db->query($baseSQL);
        foreach ($result as $location) {
            $bus = findBestBusStop($db, $location['lat'], $location['long']);
            $distances[$url] = calDistance($db, $lat, $long, $bus['lat'], $bus['lon']);
            $matches[$url] = $matches[$url] / $distances[$url];
            //echo "lat: $lat, long: $long, busLat: " . $bus['lat'] . ", busLong: " . $bus['lon'] . "\n";
        }
    }

    arsort($matches);
//    print_r($matches);
    return $matches;
    //print_r($distances);
}

//$db = new PDO("sqlite:ptt.db");
//$myStop = findBestBusStop($db, 25.0577119980239, 121.61451601353305);
//print_r($myStop);
//$myStop = findBestBusStop($db, 25.014713, 121.534729);
//print_r($myStop);
//print_r($myStop);
//echo "stop: " . $myStop['name'] . ", score: " . $myStop['score'] . "\n";
//fulfillYourWishes($db, array('二手', '衣服'), 25, 121);
?>

