<%-- 
    Document   : faqs
    Created on : Sep 27, 2016, 12:50:35 PM
    Author     : vardhan
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body bg color="red">
      <jsp:include page="head.jsp"/>
      
        <div id="FAQContent" style="width: 100%; height: 100%; background-color: white;
            overflow: auto;">
            <div style="margin: 0; padding: 0; width: 90%; margin: auto; font-family: 'PT Sans Narrow', sans-serif;
                font-size: large">
                <table align="center">
                    <tr>
                        <td align="center">
                            <h2>
                                Frequently Asked Questions</h2>
                        </td>
                    </tr>
                </table>
                <ul style='list-style: none;'>
                    <li>
                        <div class="question">
                            <a href='faqs.jsp' class='head'>1.Can I select my seats at the time of booking? </a>
                        </div>
                        <div class='content'>
                            A.Yes. We are showing complete layout of seating.
                        </div>
                    </li>
                    <li>
                        <div class="question">
                            <a href='#' class='head'>2. Can I change my Theatre/ Seats/ show time after booking?
                            </a>
                        </div>
                        <div class='content'>
                            A.Yes. We have cancellation feature. You can cancel your tickets atleast one day before
                            show time.
                        </div>
                    </li>
                    <li>
                        <div class="question">
                            <a href='#' class='head'>3.Cancellation of Tickets Partially or Full cancellation?
                            </a>
                        </div>
                        <div class='content'>
                            A.No / Yes.
                        </div>
                    </li>
                    <li>
                        <div class="question">
                            <a href='#' class='head'>4. How many Tickets can I book per transaction? </a>
                        </div>
                        <div class='content'>
                            A. you can book Maximum of 6 tickets per transaction.
                        </div>
                    </li>
                    <li>
                        <div class="question">
                            <a href='#' class='head'>5.Why should I provide my mobile number? </a>
                        </div>
                        <div class='content'>
                            A. You will be registered user by Mobile number registering from then on all transactions
                            issue will reflect using the mobile number—U can use the My account tab.
                        </div>
                    </li>
                    <li>
                        <div class="question">
                            <a href='#' class='head'>6. After booking where / how or exchange my tickets? </a>
                        </div>
                        <div class='content'>
                            A.You can use our Kiosks placed in theatres were you can punch the ticket id consists
                            of (8) numneric digits which the combination of password+reservation number.You
                            will get an print out by which you will be allowed into the theatre…./ theatres
                            without Kiosks should exchange with the theatre tickets in theatre….
                        </div>
                    </li>
                    <li>
                        <div class="question">
                            <a href='#' class='head'>7.How can I buy tickets with out using credit card / debit
                                card? </a>
                        </div>
                        <div class='content'>
                            A. Yes. We have 1000+ ticket outlets in TS .you can recharge your prepaid ticket
                            money at any of the ticket outlets.
                        </div>
                    </li>
                    <li>
                        <div class="question">
                            <a href='#' class='head'>8. What are the payment options to recharge my account?
                            </a>
                        </div>
                        <div class='content'>
                            A. we accept all online payments like Credit Card , Debit card, Net banking, Cash
                            cards, Mobile Payments.
                        </div>
                    </li>
                    <li>
                        <div class="question">
                            <a href='#' class='head'>9. I had booked tickets in expressshow, but the theatre does
                                not running the show in any reasons.. what is the refund process? </a>
                        </div>
                        <div class='content'>
                            A. in these type cases we will refund your prepaid ticket money to your account
                            .
                        </div>
                    </li>
                    <li>
                        <div class="question">
                            <a href='#' class='head'>10. My account has not recharged but money deducted from my
                                credit / account , what can I do ? </a>
                        </div>
                        <div class='content'>
                            A. The amount will be refunded to your bank account / your prepaid ticket money.
                        </div>
                    </li>
                    <li>
                        <div class="question">
                            <a href='#' class='head'>11. What are booking methods in expressshow!? </a>
                        </div>
                        <div class='content'>
                            1) Through Internet (www.expressshow.com)<br />
                            2) Mobile Application (Android , I OS, Windows)
                            <br />
                            3) IVR  (24 Hrs Computerized IVR)<br />
                            4)Ticket outlets in TS<br />
                          
                        </div>
                    </li>
                    <li>
                        <div class="question">
                            <a href='#' class='head'>12. Is there any extra charges on expressshow! (Monthly)?
                            </a>
                        </div>
                        <div class='content'>
                            A. we are charged monthly 20 rs for cancellation future.
                        </div>
                    </li>
                    <li>
                        <div class="question">
                            <a href='#' class='head'>13. How much service charge on each Ticket ? </a>
                        </div>
                        <div class='content'>
                            A. we are charging ----------------
                        </div>
                    </li>
                    <li>
                        <div class="question">
                            <a href='#' class='head'>14. What is prepaid ticket Money ? </a>
                        </div>
                        <div class='content'>
                            A. It is an online wallet mechanism for buying tickets.
                        </div>
                    </li>
                    <li>
                        <div class="question">
                            <a href='#' class='head'>15. Why should prepay ? </a>
                        </div>
                        <div class='content'>
                            A. we accept all online payments like Credit Card , Debit card, Net banking, Cash
                            cards, Mobile Payments.
                        </div>
                    </li>
                    <li>
                        <div class="question">
                            <a href='#' class='head'>16. How can I know my booking confirmation ? </a>
                        </div>
                        <div class='content'>
                            A Confirmation will be sent to customer via.<br />
                            1.SMS<br />
                            2.eMail<br />
                            3.You can know by calling IVRs No.  .
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      <jsp:include page="footer.jsp"/>
    
      
    </body>
</html>
