$logPath = 'C:\Users\Admin\.gemini\antigravity\brain\2003874d-85c8-4064-9ec7-767634de745a\.system_generated\logs\transcript_full.jsonl'
$line38 = (Get-Content $logPath)[38]

$connectorMatches = [regex]::Matches($line38, "buildConnectorEl\('([^']+)'\)") | ForEach-Object { $_.Groups[1].Value }
$branchMatches    = [regex]::Matches($line38, "buildBranchEl\('([^']+)'\)") | ForEach-Object { $_.Groups[1].Value }

Set-Content -Path 'legacy_connectors.txt' -Value $connectorMatches
Set-Content -Path 'legacy_branches.txt' -Value $branchMatches

Write-Host "=========================================="
Write-Host "Extracted Legacy Connector IDs count:" $connectorMatches.Count
Write-Host "Extracted Legacy Branch IDs count:" $branchMatches.Count
Write-Host "=========================================="
