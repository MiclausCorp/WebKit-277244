<?php

if (!function_exists('sys_get_temp_dir')) {
    // Based on http://www.phpit.net/article/creating-zip-tar-archives-dynamically-php/2/
    // If the builtin PHP sys_get_temp_dir doesn't exist, we replace it with one that will
    // try to guess from the environment.  Since sys_get_temp_dir() doesn't return a trailing
    // slash on all system (see comment at http://us.php.net/sys_get_temp_dir), we don't
    // append a trailing slash, and expect callers to append one when needed.
    function sys_get_temp_dir()
    {
        // Try to get from environment variable
        if (!empty($_ENV['TMP']))
            return realpath($_ENV['TMP']);
        if (!empty($_ENV['TMPDIR']))
            return realpath($_ENV['TMPDIR']);
        if (!empty($_ENV['TEMP']))
            return realpath( $_ENV['TEMP']);
        return "/tmp";
    }
}

if (!function_exists('file_put_contents')) {
    function file_put_contents($filename, $data)
    {
        $handle = fopen($filename, "w");
        if (!$handle)
            return FALSE;
        $bytesWritten = fwrite($handle, $data);
        if (!fclose($handle))
            return FALSE;
        return $bytesWritten;
    }
}

if (!function_exists('stream_copy_to_stream')) {
    function stream_copy_to_stream($source, $dest)
    {
        $result = 0;
        while (!feof($source)) {
            $bytesWritten = fwrite($dest, fread($source, 8192));
            if (!$bytesWritten)
                return FALSE;
            $result = $result + $bytesWritten;
        }

        return $result;
    }
}

if (!function_exists('scandir')) {
    function scandir($dir)
    {
        if (!is_dir($dir))
            return FALSE;

        $dh = opendir($dir);
        while ($filename = readdir($dh)) {
            $files[] = $filename;
        }

        closedir($dh);
        sort($files);

        return $files;
    }
}

?>
