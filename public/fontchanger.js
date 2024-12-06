document.write('\
<div class="selectdiv">\
<select title="font changer" onchange="changingFontStyle (this);">\
   <option value="Fira Code" elected="selected">Fira Code</option>\
   <option value="Comic Sans">Comic Sans</option>\
   <option value="Lexend Exa">Lexend Exa</option>\
   <option value="Lexend Mega">Lexend Mega</option>\
   <option value="OpenDyslexic-Regular">OpenDyslexic</option>\
   <option value="Papyrus">Papyrus</option>\
   <option value="Verdana">Verdana</option>\
   <option value="Wingdings">Wingdings</option>\
</select>\
</div>\
<script>\
   var changingFontStyle = function (fontstyle) {\
      document.getElementById("box").style.fontFamily = fontstyle.value;\
   }\
</script>\
');