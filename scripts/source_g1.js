//dynamic menu for Learning Curve (lc) - PPP klee v1.0
//PPP klee v1.1 fix on Opera5 and NS7 and IE cell layer.
function lcLoadMenus() {
  if (window.lc_menu_0) return;
  window.lc_menu_0 = new Menu("root",179,19,"Verdana, Arial, Helvetica, sans-serif",9,"#660066","#ffffff","#ffffff","#660066","left","middle",0,0,1000,0,0,true,true,true,15,true,true);
  lc_menu_0.addMenuItem("<font color='#660066'>&raquo;</font>&nbsp;INTRODUCTION","location='default.htm'");
  lc_menu_0.addMenuItem("<font color='#660066'>&raquo;</font>&nbsp;YOUR&nbsp;INVESTIGATION","location='investigation.htm'");
  lc_menu_0.addMenuItem("<font color='#660066'>&raquo;</font>&nbsp;BACKGROUND","location='background.htm'");
  lc_menu_0.bgImageUp="/education/politics/images/dropdown/drop_option_g1_d.gif";
  lc_menu_0.bgImageOver="/education/politics/images/dropdown/drop_option_g1_u.gif";
  lc_menu_0.fontWeight="normal";
  lc_menu_0.hideOnMouseOut=true;
  lc_menu_0.writeMenus();
}//dynamic menu for Learning Curve end