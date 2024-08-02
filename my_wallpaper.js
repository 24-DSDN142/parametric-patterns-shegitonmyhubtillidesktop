//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let MohawkOn = true//Enables Triangle Mowhawk when true, Ellipse when false
let BackgroundColour = false // Changes background colour from Cyan when true to colourchange2 when false (var see below)
let SideColour = false //Dictates side borders colour on if statement
let TopColour = true //Dictates top and bottom border colour on if statement
let BodyColour = false //Dictates Head colour on if statement
let colourchange = '#cc00ff'; // decides Background colour: Note doesn't work with (,,,), brackets conflict, use hex values instead
let colourchange2 = '#00f7ff'; //Dictates head colour on else statement; Note doesn't work with (,,,), brackets conflict, use hex values instead

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(0, 255, 242); //light honeydew green colour

 if (BackgroundColour) {
    background(0, 255, 242);
 } else {
    background(colourchange);
  } 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
 var TWT = 400/3
 var Centre = 100;
 var Full = 170;
 var Neg = 0
 var Max = 200

  if (MohawkOn){
    fill(59,222, 0); // Green
    beginShape();
    vertex(120, Centre);
    vertex(120, 25);
    vertex(30, Centre);
    endShape(CLOSE);// Mohawk
    line(30, Centre, 120, Centre);
  }else{
    fill(255, 255, 0); //Yellow
    ellipse(110, 60, 10, 30);
    ellipse(100, 55, 10, 20);
    ellipse(90, 60, 10, 18);
    ellipse(80, 70, 13, 21);
    ellipse(70, 80, 10, 25);
    ellipse(63, 90, 7, 30); // Ellipse Mowhawk
  }

  fill(222, 113, 0); //Orange
  beginShape();
  vertex(TWT, 99.5);
  vertex(TWT, 80);
  vertex(Full, 99.5);
  endShape(CLOSE);// Top Beak Part

  beginShape();
  vertex(TWT, 100.5);
  vertex(TWT, 120);
  vertex(Full, 100.5);
  endShape(CLOSE); // Beak Bottom

  if (BodyColour) {fill(222, 18, 0); // Head Red
    ellipse(Centre, Centre, 80, 80);
  } else {fill(colourchange2); //Head Colour Changeable
    ellipse(Centre, Centre, 80, 80);
    stroke(153, 2, 2);
    line (65, 100, 100, 135);
    line (75, 100, 100, 125);
    line (85, 100, 100, 115);
  } // Head

  stroke(0,0,0);
  fill(0,0,0); // White
  ellipse(120, 80, 15, 15);// Eye
  fill(255, 255, 255);
  ellipse(122, 80, 10, 10);

  if (TopColour) {
    fill(0, 5, 148); //Blue
  rect(Neg, 180, Max, 10);
  rect(Neg, 10, Max, 10);//top/bottom
  } else {fill (0, 209, 115) //Green
  rect(Neg, 180, Max, 10);
  rect(Neg, 10, Max, 10)
  }

 if (SideColour) {
    fill(176, 0, 212); //Purple
    rect(10, Neg, 10, Max);
    rect(180, Neg, 10, Max);//sides
 } else {
    fill(150, 0, 25); //Red
    rect(10, Neg, 10, Max);
    rect(180, Neg, 10, Max);
  }
}