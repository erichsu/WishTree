<?php
// Submit those variables to the server
include("index.php");
$post_data = array(
    'query' => iconv("UTF-8", "big5", $_GET['query'])
);
//$post_data = array(
//    'query' => iconv("UTF-8", "big5", $argv[1])
//);
 
// Send a request to example.com 
$result = post_request('http://mt.iis.sinica.edu.tw/cgi-bin/text.cgi', $post_data);
if ($result['status'] == 'ok'){
    // print the result of the whole request:
    preg_match("#/uwextract/pool/(\d{4})\.html#", $result['content'], $matches_array);
	
	$analyze_file = "http://mt.iis.sinica.edu.tw/uwextract/pool/".$matches_array[1].".tag.txt";
	$analyze_str = file_get_contents($analyze_file);
	preg_match_all('#(.+?)\([A-Za-z]{1,2}\)#', $analyze_str, $matches_array);
	for($i = 0; $i < sizeof($matches_array[1]); $i++)
		$matches_array[1][$i] = iconv("big5", "UTF-8" , substr($matches_array[1][$i], 2));
	
	
	$db = new PDO("sqlite:ptt.db");
//	$myStop = findBestBusStop($db, 25.0577119980239, 121.61451601353305);
//	print_r($myStop);
//	$myStop = findBestBusStop($db, 25.014713, 121.534729);
//	print_r($myStop);
//	print_r($myStop);
//	echo "stop: " . $myStop['name'] . ", score: " . $myStop['score'] . "\n";
//	print_r(fulfillYourWishes($db, $matches_array[1], $_GET['lat'], $_GET['long']));
	echo json_encode(fulfillYourWishes($db, $matches_array[1], $_GET['lat'], $_GET['long']));
}
else {
    echo 'A error occured: ' . $result['error']; 
}

function post_request($url, $data, $referer='') {
 
    // Convert the data array into URL Parameters like a=b&foo=bar etc.
    $data = http_build_query($data);
 
    // parse the given URL
    $url = parse_url($url);
 
    if ($url['scheme'] != 'http') { 
        die('Error: Only HTTP request are supported !');
    }
 
    // extract host and path:
    $host = $url['host'];
    $path = $url['path'];
 
    // open a socket connection on port 80 - timeout: 30 sec
    $fp = fsockopen($host, 80, $errno, $errstr, 30);
 
    if ($fp){
 
        // send the request headers:
        fputs($fp, "POST $path HTTP/1.1\r\n");
        fputs($fp, "Host: $host\r\n");
 
        if ($referer != '')
            fputs($fp, "Referer: $referer\r\n");
 
        fputs($fp, "Content-type: application/x-www-form-urlencoded\r\n");
        fputs($fp, "Content-length: ". strlen($data) ."\r\n");
        fputs($fp, "Connection: close\r\n\r\n");
        fputs($fp, $data);
 
        $result = ''; 
        while(!feof($fp)) {
            // receive the results of the request
            $result .= fgets($fp, 128);
        }
    }
    else { 
        return array(
            'status' => 'err', 
            'error' => "$errstr ($errno)"
        );
    }
 
    // close the socket connection:
    fclose($fp);
 
    // split the result header from the content
    $result = explode("\r\n\r\n", $result, 2);
 
    $header = isset($result[0]) ? $result[0] : '';
    $content = isset($result[1]) ? $result[1] : '';
 
    // return as structured array:
    return array(
        'status' => 'ok',
        'header' => $header,
        'content' => $content
    );
}
?>