<!-- Mail send -->
<?php
if(isset($_POST['submit'])){
    $ieltsCat=$_POST['ielts-cat'];
    $packOpt=$_POST['pkg-opt'];
    $email = $_POST['email'];
    $fName = $_POST['f-name'];
    $mob=$_POST['email'];
    $message = "Don't Reply...";
    $uploadStatus = 1;

    if($uploadStatus == 1){
        // Recipient
        $toEmail = "liginabraham@mca.ajce.in";
        // Sender
        $from = 'info@flayence.com';
        $fromName = 'Flayence Academy';
        // Subject
        $emailSubject = 'New Enquiry';
        // Message
        $htmlContent = '<h2>Enquiry</h2>
                <p><b>Name:</b> '.$fName.'</p>
                <p><b>Email:</b> '.$email.'</p>
                <p><b>Mobile:</b> '.$mob.'</p>
                <p><b>Ielts Category:</b> '.$ieltsCat.'</p>
                <p><b>Package option:</b> '.$packOpt.'</p>
                <p><b>Message:</b><br/>'.$message.'</p>';
        // Header for sender info
        $headers = "From: $fromName"." <".$from.">";
        
            // Set content-type header for sending HTML email
            $headers .= "\r\n". "MIME-Version: 1.0";
            $headers .= "\r\n". "Content-type:text/html;charset=UTF-8";
            // Send email
            $mail = mail($toEmail, $emailSubject, $htmlContent, $headers);
            echo $mail;
        
        // If mail sent
        if($mail){
            $statusMsg = 'Your email attachment request has been submitted successfully !';
        }else{
            $statusMsg = 'Your request submission failed, please try again.';
        }
    }
    echo '<script>alert("'.$statusMsg.'");</script>';
}
?>
<!-- Mail send end -->