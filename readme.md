# SimplePlayer
[Demo](https://player.cogito.ga/demo)
## 引入播放器
在head标签内引入所需的库
```
<head>
    ...
    <script src='https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js'/></script>
    <script src="https://cdn.jsdelivr.net/gh/jquery/jquery-color/jquery.color.js"> </script>
    <link href="https://cdn.jsdelivr.net/gh/cnxb/simpleplayer/simpleplayer.css" rel="stylesheet">
    ...
</head>
```
在body末尾引入SimplePlayer的js
```
<body>
    ...
    <script src="https://cdn.jsdelivr.net/gh/cnxb/simpleplayer/simpleplayer.js"></script>
</body>
```
## 插入播放器
自定义音乐
黑
```
<body>
    ...
    <player url="音乐地址" class="player_dark"></player>
    ...
</body>
```
白
```
<body>
    ...
    <player url="音乐地址" class="player_light"></player>
    ...
</body>
```
使用网易云音乐
```
<body>
    ...
    <player url="https://music.163.com/song/media/outer/url?id=网易云音乐id" class="player_light"></player>
    <player url="https://music.163.com/song/media/outer/url?id=网易云音乐id" class="player_dark"></player>
    ...
</body>
```