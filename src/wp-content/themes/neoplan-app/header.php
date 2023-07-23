<?php 
    $vers = getVers(); 

    $metadata = array(
        'title' => 'Site wordpress',
        'description' => 'mais um site wordpress'
    );
?>
<!doctype html>
<html>
<!--[if IE 7 ]>    <html lang="pt-BR" class="isie ie7 oldie no-js"> <![endif]-->
<!--[if IE 8 ]>    <html lang="pt-BR" class="isie ie8 oldie no-js"> <![endif]-->
<!--[if IE 9 ]>    <html lang="pt-BR" class="isie ie9 no-js"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="pt-BR" class="no-js"> <!--<![endif]-->

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
    <!-- TITLE -->
    <title><?php echo $metadata['title']; ?></title>
	<meta name="description" content="<?php echo $metadata['description']; ?>"/>
    <link href="<?php echo getTheme('style.css', $vers); ?>" rel="stylesheet" media="all" />
</head>

<body>