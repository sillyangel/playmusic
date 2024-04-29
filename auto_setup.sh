# Clone the repositories needed for development
git clone git@gitlab.com:sillyangel/playmusic.git
git clone git@gitlab.com:sillyangel/playcdn2.git
# Install Firebase tools and yt-dlp standalone linux pkg
curl -sL https://firebase.tools | bash
curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_linux -o /usr/local/bin/yt-dlp
# chmod new yt-dlp
chmod a+rx /usr/local/bin/yt-dlp
