//dynamic menu for Learning Curve (lc) - PPP klee v1.0
//PPP klee v1.1 fix on Opera5 and NS7 and IE cell layer.
function lcLoadMenus() {
  if (window.lc_menu_0) return;
  window.lc_menu_0 = new Menu("root",148,19,"Verdana, Arial, Helvetica, sans-serif",9,"#990033","#ffffff","#ffffff","#990000","left","middle",0,0,1000,0,0,true,true,true,15,true,true);
  lc_menu_0.addMenuItem("<font color='#990033'>&raquo;</font>&nbsp;SOURCE&nbsp;ONE","location='g9s1a.htm'");
  lc_menu_0.addMenuItem("<font color='#990033'>&raquo;</font>&nbsp;SOURCE&nbsp;TWO","location='g9s2a.htm'");
  lc_menu_0.addMenuItem("<font color='#990033'>&raquo;</font>&nbsp;SOURCE&nbsp;THREE","location='g9s3a.htm'");
  lc_menu_0.addMenuItem("<font color='#990033'>&raquo;</font>&nbsp;SOURCE&nbsp;FOUR","location='g9s4.htm'");
  lc_menu_0.addMenuItem("<font color='#990033'>&raquo;</font>&nbsp;SOURCE&nbsp;FIVE","location='g9s5a.htm'");
  lc_menu_0.bgImageUp="/education/politics/images/dropdown/drop_option_g9_d.gif";
  lc_menu_0.bgImageOver="/education/politics/images/dropdown/drop_option_g9_u.gif";
  lc_menu_0.fontWeight="normal";
  lc_menu_0.hideOnMouseOut=true;
  lc_menu_0.writeMenus();
}//dynamic menu for Learning Curve end