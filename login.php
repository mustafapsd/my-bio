<?php

// Retrieve the values from the POST request
$username = $_POST['username'];
$password = $_POST['password'];

// Define the pattern for username and password validation
$pattern = '/^.+@sakarya\.edu\.tr$/';

$usernameWithoutDomain = substr($username, 0, strpos($username, '@'));

// Perform pattern matching
$matches = preg_match($pattern, $username) && ($usernameWithoutDomain === $password);

// Prepare the response as JSON
$response = ['success' => $matches];

// Set the response headers
header('Content-Type: application/json');

// Send the JSON response
echo json_encode($response);

?>
