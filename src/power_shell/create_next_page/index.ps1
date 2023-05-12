function CreateNextPage($folder_name) {    
    if (!$folder_name) {
        return Write-Error "Must have the name of the folder."        
    }    

    if (Test-Path "src\app\$folder_name") { 
        return Write-Error "The folder '$folder_name' already exists."
    } 
    
    $page_content = @"
import styles from 'index.module.css';

export default function Page() {
  return <div>Hello Page!!</div>;
}
"@

    $layout_content = @"
import styles from 'index.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
"@

    New-Item -ItemType Directory -Path "src\app\$folder_name"
    New-Item -ItemType File -Path "src\app\$folder_name\page.tsx"
    Set-Content -Path "src\app\$folder_name\page.tsx" -Value $page_content
    New-Item -ItemType File -Path "src\app\$folder_name\layout.tsx"
    Set-Content -Path "src\app\$folder_name\layout.tsx" -Value $layout_content
}
