<?php
// get-logos.php - Liste automatiquement tous les logos du dossier

header('Content-Type: application/json');

$logosDir = 'assets/img/logos/';
$allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'avif', 'svg'];

$logos = [];

if (is_dir($logosDir)) {
    $files = scandir($logosDir);
    
    foreach ($files as $file) {
        // Ignorer les fichiers cachés et les dossiers
        if ($file === '.' || $file === '..' || $file[0] === '.') {
            continue;
        }
        
        $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));
        
        // Vérifier que c'est une image autorisée
        if (in_array($extension, $allowedExtensions)) {
            // Générer un alt text à partir du nom de fichier
            $altText = pathinfo($file, PATHINFO_FILENAME);
            $altText = str_replace(['-', '_'], ' ', $altText);
            $altText = ucwords($altText);
            
            $logos[] = [
                'file' => $file,
                'alt' => $altText,
                'path' => $logosDir . $file
            ];
        }
    }
}

// Trier par ordre alphabétique
usort($logos, function($a, $b) {
    return strcmp($a['alt'], $b['alt']);
});

echo json_encode($logos, JSON_PRETTY_PRINT);
?>
