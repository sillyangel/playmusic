curl -sL https://firebase.tools | bash
curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_linux -o /usr/local/bin/yt-dlp
# chmod new yt-dlp
chmod a+rx /usr/local/bin/yt-dlp
# move yt which is the local yt-dlp command to ./yt -> /usr/local/bin/yt
mv ./yt /usr/local/bin/yt
chmod a+rx /usr/local/bin/yt