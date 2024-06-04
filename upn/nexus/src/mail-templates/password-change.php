<?php 

function generateHTML($ProjectURL, $AppName, $logo, $userInfo, $customerName, $dateTime) {
  // Start buffering the output
  ob_start();
?>
<div style="width:100%;float:left;">

<div style="margin:10px;">
  <!-- Header ::: START -->
  <div style="width:50%;float:left;">
    <img style="width: 130px;" src="<?php echo $logo; ?>" />
  </div>

   <div align="right" style="width:50%;float:left;padding-top:15px;">
     <div><b>Notification</b></div>
     <div><?php echo $dateTime; ?></div>
   </div>
   <!-- Header ::: END -->
   <!-- Body ::: START -->
   <div style="border:1px solid #ccc;float:left;width:100%;">
    <div style="margin:15px;line-height:22px;">
      <div style="font-size: 16px;margin-bottom:10px;">Hi <b><?php echo $customerName ?></b>,</div>
      <div style="font-size:14px;">
        We hope this email finds you well. It has come to our attention that you may be experiencing difficulties 
        accessing your account due to a forgotten password. We understand how frustrating this can be, and we are 
        here to assist you in resolving the issue.<br/><br/>
        To ensure the security of your account and protect your personal information, we require you to reset 
        your password.<br/><br/>
        Click on the following button to reset your password:<br/>
          <div align="center">
            <a href="<?php echo $ProjectURL."UserModules/Authentication/Template1/ChangePwd/".$userInfo; ?>">
             <button><b>Reset your Password</b></button>
            </a>
          </div>
          <br/></br>
        If you did not initiate this password reset request or suspect any unauthorized activity on your account, 
        please contact our support team immediately at [support contact information]. We take your account security 
        very seriously and will assist you in resolving any potential issues.<br/><br/>
        Remember to update your password regularly and avoid using the same password across multiple platforms. 
        This practice will help protect your account and maintain your online security.<br/><br/>
        If you have any further questions or need additional assistance, please do not hesitate to reach out to our 
        support team. We are available [support hours and contact information].<br/><br/>
        Thank you for your prompt attention to this matter. We apologize for any inconvenience caused and appreciate 
        your cooperation in maintaining the security of your account.<br/><br/>
      </div>
    </div>
    
   </div>
   <!-- Body ::: END -->
   <!-- Footer ::: START -->
   <div style="width:100%;float:left;">
   <div align="right" style="margin-top:10px;">
      We Sincerely,<br/>
      <?php echo $AppName; ?> 
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