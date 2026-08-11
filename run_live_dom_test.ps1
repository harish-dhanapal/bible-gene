$server = Start-Process python -ArgumentList '-m http.server 8765' -PassThru -WindowStyle Hidden
Start-Sleep -Seconds 3

try {
    $edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
    $process = Start-Process $edge -ArgumentList '--headless', '--disable-gpu', '--dump-dom', 'http://localhost:8765/index.html' -RedirectStandardOutput 'dom_out.txt' -PassThru
    $process.WaitForExit(10000)
    
    $content = Get-Content 'dom_out.txt' -Raw
    Write-Host "DOM output total length:" $content.Length
    
    $startIdx = $content.IndexOf('<pre id="comparison-report"')
    if ($startIdx -ge 0) {
        $endIdx = $content.IndexOf('</pre>', $startIdx)
        Write-Host "`n"
        Write-Host $content.Substring($startIdx, $endIdx + 6 - $startIdx)
    } else {
        Write-Host "Pre tag not found. Content sample:"
        Write-Host $content.Substring(0, [Math]::Min(500, $content.Length))
    }
} finally {
    Stop-Process -Id $server.Id -ErrorAction SilentlyContinue
}
