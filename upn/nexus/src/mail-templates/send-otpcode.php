<?php 
require_once './../core/app.database.php';
require_once './../core/app.initiator.php';

function generateHTML($otpCode, $name, $email) {
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
      <div style="font-size: 16px;margin-bottom:10px;"><b><i>Dear <?php echo $name; ?>,</i></b></div>
      <div style="font-size:14px;">
        To ensure the security of your account, we require a one-time password (OTP) for your recent request.<br/><br/>
        Your OTP Code is:
        <span style="background-color:#f1f1f1;border-radius:8px;margin-left:15px;font-size:16px;border:1px solid #000;padding:10px 15px 10px 15px;"><b><?php echo $otpCode; ?></b></span><br/><br/>
        Please enter this code at the Website (or) Mobile App of <u><i><?php echo $PROJ_APP_NAME; ?></i></u> to proceed. This OTP is valid for 10 minutes.<br/><br/>
        <b>Important Security Tips:</b>
        <ul>
          <li>Do not share this OTP with anyone.</li>
          <li>[App] will never ask for your OTP via phone call or email.</li>
          <li>If you did not request this OTP, please contact our support team immediately at 
            <u><i><?php echo $PROJ_APP_EMAIL; ?></i></u>.</li>
        </ul><br/><br/>
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