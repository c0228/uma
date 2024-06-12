<?php 
require_once './../core/app.database.php';
require_once './../core/app.initiator.php';

function AccountConfirmationMail($name, $email) {
  global $APP_PROPERTIES;
  $PROJ_APP_NAME = $APP_PROPERTIES["PROJ_APP_NAME"];
  $PROJ_APP_LOGO = $APP_PROPERTIES["PROJ_APP_LOGO"];
  $PROJ_APP_EMAIL = $APP_PROPERTIES["PROJ_APP_EMAIL"];
  // Start buffering the output
  ob_start();
?>
<div style="width:100%;float:left;">

<div style="margin:10px;">
  <!-- Header ::: START -->
  <div style="width:50%;float:left;">
    <img style="width: 130px;" src="<?php echo $PROJ_APP_LOGO; ?>" />
  </div>

   <!-- Header ::: END -->
   <!-- Body ::: START -->
   <div style="border:1px solid #ccc;float:left;width:100%;">
    <div style="margin:15px;line-height:22px;">
      <div style="font-size: 16px;margin-bottom:10px;"><br/><b><i>Hello <?php echo $name; ?>,</i></b></div>
      <div style="font-size:14px;">
      <br/>AWESOME! YOUR USER ACCOUNT IS ALL SET AND YOU ARE READY TO GO -<br/><br/>
      We're thrilled to welcome you to the <?php echo $PROJ_APP_NAME; ?> community!.<br/>
      Your account has been successfully created and you're now ready to explore everything and have a learning adventure that <?php echo $PROJ_APP_NAME; ?> App offers to you.<br/><br/>
        <b>Get Started with  <?php echo $PROJ_APP_NAME; ?>:</b>
        <ul>
          <li><b>Explore courses:</b> Dive into a vast library of courses and many more.</li>
          <li><b>Personalize your learning:</b> Set your goals, choose your preferred learning style, and track your progress every step of the way.</li>
          <li><b>Connect with the community:</b> Join discussions, ask questions, and collaborate with fellow learners.</li>
        </ul><br/>
      </div>
    </div>
    
   </div>
   <div style="color:#555;padding-top:8px;font-size:12px;width:100%;float:left;">
    <b>Disclaimer:</b> This email was sent to <u><i><?php echo $email; ?></i></u> because of a request to verify your identity at 
    <u><i><?php echo $PROJ_APP_NAME; ?></i></u>. If you did not make this request, please ignore this email or contact us at <u><i><?php echo $PROJ_APP_EMAIL; ?></i></u>.
   </div>
   <!-- Body ::: END -->
   <!-- Footer ::: START -->
   <div style="width:100%;float:left;">
   <div align="center"><br/>Thank you for your attention and cooperation.<br/><br/></div>
   <div align="right" style="margin-top:10px;">
      We Sincerely,<br/>
      <?php echo $PROJ_APP_NAME; ?> 
   </div>
   </div>
   <!-- Footer ::: END -->



</div>

</div>
<?php
  // Get the buffered output
  $html = ob_get_clean();
  // Return the HTML content
  return $html;
} ?>
<?php 
// echo AccountConfirmationMail('Nellutla L N Rao','nellutlalnrao@gmail.com');
?>
