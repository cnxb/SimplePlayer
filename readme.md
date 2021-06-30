# SimplePlayer
[Demo(closed)]()
## Set up SimplePlayet
Copy-paste the code into your <head>.
```
    
    <script src='https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js'/></script>
    <script src="https://cdn.jsdelivr.net/gh/jquery/jquery-color/jquery.color.js"> </script>
    <link href="https://cdn.jsdelivr.net/gh/cnxb/simpleplayer/simpleplayer.css" rel="stylesheet">
    
```
Place the following <script> near the end of your pages, right before the closing </body> tag, to enable them.
```
<body>
    ...
    <script src="https://cdn.jsdelivr.net/gh/cnxb/simpleplayer/simpleplayer.js"></script>
</body>
```
## Embed player
Music
Dark
```
<body>
    ...
    <player url="[link]" class="player_dark"></player>
    ...
</body>
```
Light
```
<body>
    ...
    <player url="[link]" class="player_light"></player>
    ...
</body>
```
NetEaseMusic
```
<body>
    ...
    <player url="https://music.163.com/song/media/outer/url?id=[id]" class="player_light"></player>
    <player url="https://music.163.com/song/media/outer/url?id=[id]" class="player_dark"></player>
    ...
</body>
```
