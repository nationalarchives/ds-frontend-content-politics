//dynamic menu for Learning Curve (lc) - PPP klee v1.0
//PPP klee v1.1 fix on Opera5 and NS7 and IE cell layer.
function lcLoadMenus() {
  if (window.lc_menu_0) return;
  window.lc_menu_0 = new Menu("root",148,19,"Verdana, Arial, Helvetica, sans-serif",9,"#336600","#ffffff","#ffffff","#336600","left","middle",0,0,1000,0,0,true,true,true,15,true,true);
  lc_menu_0.addMenuItem("<font color='#336600'>&raquo;</font>&nbsp;SOURCE&nbsp;ONE","location='g6s1.htm?zoomifyImagePath=zoomify_g3s2&zoomifyNavX=0&zoomifyNavY=0&zoomifyX=-0.0252324037184595&zoomifyY=0.0938815339057851&zoomifyZoom=38&zoomifyNavWidth=180&zoomifyNavHeight=120&zoomifySlider=1&zoomifyMaxZoom=100&zoomifyNavWindow=1&zoomifyToolbar=1'");
  lc_menu_0.addMenuItem("<font color='#336600'>&raquo;</font>&nbsp;SOURCE&nbsp;TWO","location='g6s2.htm'");
  lc_menu_0.addMenuItem("<font color='#336600'>&raquo;</font>&nbsp;SOURCE&nbsp;THREE","location='g6s3a.htm'");
  lc_menu_0.bgImageUp="/education/politics/images/dropdown/drop_option_g6_d.gif";
  lc_menu_0.bgImageOver="/education/politics/images/dropdown/drop_option_g6_u.gif";
  lc_menu_0.fontWeight="normal";
  lc_menu_0.hideOnMouseOut=true;
  lc_menu_0.writeMenus();
}//dynamic menu for Learning Curve end