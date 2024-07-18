<?php 
require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../utils/DateTime.php';

function generateHTML($customerId, $customerName, $customerEmail) {
  global $APP_PROPERTIES;
  global $PROJ_MODE;
  global $TIMESTAMP_TZ_FORMAT;
  global $DATE_FORMAT;

  $PROJ_APP_NAME = $APP_PROPERTIES["PROJ_APP_NAME"];
  $PROJ_APP_LOGO = $APP_PROPERTIES["PROJ_APP_LOGO"];
  $PROJ_APP_EMAIL = $APP_PROPERTIES["PROJ_APP_EMAIL"];
  $PROJ_URL = $APP_PROPERTIES[$PROJ_MODE."_PROJ_URL"];
  $EMAIL_EXPIRY_TIME = $APP_PROPERTIES["EMAIL_EXPIRY_TIME"];

  // Define things
  $timezone = 'Asia/Kolkata';
  $dateTime = getCurrentDateTime($timezone, $DATE_FORMAT);
  $userInfo=base64_encode('EmailAt'.$customerEmail.'|'.
			'CustomerAt'.$customerId.'|'.
			'ExpiryAt'.getExpiryTimestamp($EMAIL_EXPIRY_TIME, $TIMESTAMP_TZ_FORMAT, $timezone).'|'.
			'TimezoneAt'.$timezone);

  // Start buffering the output
  ob_start();
?>
<div style="width:100%;float:left;">

<div style="margin:10px;">
  <!-- Header ::: START -->
  <div style="width:50%;float:left;">
    <img style="width: 130px;" src="<?php echo $PROJ_APP_LOGO; ?>" />
  </div>

   <div align="right" style="width:50%;float:left;padding-top:15px;">
     <div><b>Notification</b></div>
     <div><?php echo $dateTime; ?></div>
   </div>
   <!-- Header ::: END -->
   <!-- Body ::: START -->
   <div style="border:1px solid #ccc;float:left;width:100%;">
    <div style="margin:15px;line-height:22px;">
      <div style="font-size: 16px;margin-bottom:10px;">Hi <b><?php echo $customerName ?></b>,</div><br/>
      <div style="font-size:14px;">
        We hope this email finds you well. It has come to our attention that you may be experiencing difficulties 
        accessing your account due to a forgotten password. We understand how frustrating this can be, and we are 
        here to assist you in resolving the issue.<br/><br/>
        To ensure the security of your account and protect your personal information, we require you to reset 
        your password. Click on the following button to reset your password:<br/>
          <div align="center">
            <a href="<?php echo $PROJ_URL."change-pwd/".$userInfo; ?>">
             <button style="background: #b81b1b;background-image: -webkit-linear-gradient(top, #b81b1b, #b30b0b);
                background-image: -moz-linear-gradient(top, #b81b1b, #b30b0b);background-image: -ms-linear-gradient(top, #b81b1b, #b30b0b);
                background-image: -o-linear-gradient(top, #b81b1b, #b30b0b);background-image: linear-gradient(to bottom, #b81b1b, #b30b0b);
                -webkit-border-radius: 5;-moz-border-radius: 5;border-radius: 5px;font-family: Arial;color: #ffffff;font-size: 16px;
                padding: 10px 20px 10px 20px;border: dotted #ffffff 2px;text-decoration: none;cursor:pointer;"><b>Reset your Password</b></button>
            </a>
          </div>
          <br/></br><div><b>Important Security Reminder:</b></div><br/></br>
          For your account security, please keep this email confidential. This password reset link is unique to your account and 
          allows anyone with access to it to reset your password. So, please don't share it with anyone. If you did not initiate this 
          password reset request or suspect any unauthorized activity on your account, 
          please contact our support team immediately at <?php echo $PROJ_APP_EMAIL; ?>. We take your account security 
          very seriously and will assist you in resolving any potential issues.<br/><br/>
          Remember to update your password regularly and avoid using the same password across multiple platforms. 
          This practice will help protect your account and maintain your online security. If you have any further questions or need 
          additional assistance, please do not hesitate to reach out to our 
          support team. We are available here to support you 24/7 in a Week.<br/><br/>
          <div align="center">Thank you for your prompt attention to this matter.<br/> We apologize for any inconvenience caused and appreciate 
          your cooperation in maintaining the security of your account.</div><br/><br/>
      </div>
    </div>
    
   </div>
   <div style="color:#555;padding-top:8px;font-size:12px;width:100%;float:left;">
    <b>Disclaimer:</b> This email was sent to <u><i><?php echo $customerEmail; ?></i></u> because of a request to verify your identity at 
    <u><i><?php echo $PROJ_APP_NAME; ?></i></u>. If you did not make this request, please ignore this email or contact us at 
    <u><i><?php echo $PROJ_APP_EMAIL; ?></i></u>.
   </div>
   <!-- Body ::: END -->
   <!-- Footer ::: START -->
   <div style="width:100%;float:left;">
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
}
?>