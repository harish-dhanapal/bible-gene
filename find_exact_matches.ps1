$logPath = 'C:\Users\Admin\.gemini\antigravity\brain\2003874d-85c8-4064-9ec7-767634de745a\.system_generated\logs\transcript_full.jsonl'
$lines = Get-Content $logPath
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match 'buildConnectorEl\(') {
        Write-Host "Match on line $i"
        $matches = [regex]::Matches($lines[$i], 'buildConnectorEl\(''([^'']+)''\)')
        Write-Host "Single quote matches on line $i :" $matches.Count
        $matches2 = [regex]::Matches($lines[$i], 'buildConnectorEl\("([^"]+)"\)')
        Write-Host "Double quote matches on line $i :" $matches2.Count
    }
}
