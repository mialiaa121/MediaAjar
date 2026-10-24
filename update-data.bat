@echo off
cd /d "%~dp0"
node build-manifest.js
echo.
echo Selesai. Muat ulang halaman aplikasi (F5).
pause
