//dynamic menu for Learning Curve (lc) - PPP klee v1.0
//PPP klee v1.1 fix on Opera5 and NS7 and IE cell layer.
function lcLoadMenus() {
  if (window.lc_menu_0) return;
  window.lc_menu_0 = new Menu("root",148,19,"Verdana, Arial, Helvetica, sans-serif",9,"#330066","#ffffff","#ffffff","#330066","left","middle",0,0,1000,0,0,true,true,true,15,true,true);
  lc_menu_0.addMenuItem("<font color='#330066'>&raquo;</font>&nbsp;SOURCE&nbsp;ONE","location='g2s1.htm'");
  lc_menu_0.addMenuItem("<font color='#330066'>&raquo;</font>&nbsp;SOURCE&nbsp;TWO","location='g2s2a.htm'");
  lc_menu_0.addMenuItem("<font color='#330066'>&raquo;</font>&nbsp;SOURCE&nbsp;THREE","location='g2s3.htm'");
  lc_menu_0.bgImageUp="/education/politics/images/dropdown/drop_option_g2_d.gif";
  lc_menu_0.bgImageOver="/education/politics/images/dropdown/drop_option_g2_u.gif";
  lc_menu_0.fontWeight="normal";
  lc_menu_0.hideOnMouseOut=true;
  lc_menu_0.writeMenus();
}//dynamic menu for Learning Curve end