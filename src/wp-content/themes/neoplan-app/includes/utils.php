<?php

function getVers()
{
  global $is_local;

  return $is_local ? date('Y-m-d_H-i-s') : '1';
}

function getAsset($file, $vers = '')
{
  $base_url = home_url();
  $vers = ($vers != "") ? "?{$vers}" : "";
  return "{$base_url}/wp-content/themes/neoplan-app/assets/{$file}{$vers}";
}

function getTheme($file, $vers = '')
{
  $base_url = home_url();
  $vers = ($vers != "") ? "?{$vers}" : "";
  return "{$base_url}/wp-content/themes/neoplan-app/{$file}{$vers}";
}

