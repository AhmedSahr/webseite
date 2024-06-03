<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Static Website with Sidebar</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="top-bar">
        <h1>My Website</h1>
    </header>
    <div class="sidebar">
        <h2>Sections</h2>
        <?php
        // Define main sections and subsections in an array
        $sections = array(
            "Was Ist C" => array("Geschichte", "Anwendungsbereiche"),
            "Einführung" => array("Datentypen", "Control-Flow", "Funktionen",  "datenstrukturen"),
            "Standardbibliothek" => array("Ein- und Ausgabe", "Mathematik", "Speicherverwaltung"),
            "Fortgeschrittene Speicherverwaltung" => array("Malloc und Free"),
            "Beispiel Projekte" => array("cat befehl", "Taschenrechner", "kleiner Webclient"),
            // Add more main sections and subsections as needed
        );

        // Loop through each main section and generate HTML dynamically
        foreach ($sections as $main_section => $subsections) {
            // Replace spaces with underscores and convert to lowercase for directory name
            $directory_name = strtolower(str_replace(' ', '_', $main_section));
            echo '<div class="section" onclick="toggleSection(\'section' . $directory_name . '\')">' . $main_section . '</div>';
            echo '<div id="section' . $directory_name . '-content" class="section-content">';
            echo '<a href="#section' . $directory_name . '">Go to ' . $main_section . '</a>';
            echo '<ul>';
            // Loop through each subsection and generate HTML dynamically
            foreach ($subsections as $subsection) {
                echo '<li><a href="#' . strtolower(str_replace(' ', '', $subsection)) . '">' . $subsection . '</a></li>';
            }
            echo '</ul>';
            echo '</div>';
        }
        ?>
    </div>
    <div class="content">
        <?php
        // Loop through each main section and its subsections
        foreach ($sections as $main_section => $subsections) {
            // Replace spaces with underscores and convert to lowercase for directory name
            $directory_name = strtolower(str_replace(' ', '_', $main_section));
            // Loop through each subsection and display its content
            foreach ($subsections as $subsection) {
                // Read content from text file and inject into the subsection
                $file_path = "desc/" . $directory_name . "/" . strtolower(str_replace(' ', '_', $subsection)) . '.txt';
                if (file_exists($file_path)) {
                    echo '<h2 id="' . strtolower(str_replace(' ', '', $subsection)) . '">' . $subsection . '</h2>';
                    echo '<p>' . file_get_contents($file_path) . '</p>';
                }
            }
        }
        ?>
    </div>
    <script src="script.js"></script>
</body>
</html>
