const navbar:Document.query Selector("navbar");
window. addevent listener("scroll",function(){navbar.classlist.toogle("sticky",window.scrolly>0);})