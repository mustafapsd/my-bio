<?php

// Retrieve the values from the POST request
// Takes raw data from the request
$json = file_get_contents('php://input');

if($json == '') {
    echo json_encode(['success' => false, 'message' => 'No data sent']);
    return;
}

// Converts it into a PHP object
$data = json_decode($json,true);

$username = $data['username'];
$password = $data['password'];

// Remove the "@sakarya.edu.tr" part from the username
$usernameWithoutDomain = substr($username, 0, strpos($username, '@'));

// Check if the password is the same as the username (without domain)
$matches = ($password === $usernameWithoutDomain);

// Prepare the response as JSON
$response = ['success' => $matches];

// Set the response headers
header('Content-Type: application/json');

// Send the JSON response
echo json_encode(['success' => $matches]);

?>
