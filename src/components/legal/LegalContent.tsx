export default function LegalContent() {
  return (
    <main className="w-full bg-white py-12">
      <div className="mx-auto w-full max-w-[1080px] px-6">

        {/* ── Page Title ── */}
        <h1 className="mb-8 font-['Open_Sans'] text-[37px] font-normal leading-[48px] tracking-[-0.37px] text-[#161c2d]">
          User Agreement
        </h1>

        {/* ── Intro paragraphs ── */}
        <div className="mb-6 text-[17px] font-normal leading-[27.2px] text-[#161c2d]">
          <p>
            <strong>Effective Date: January 10, 2024.</strong>{" "}
            This User Agreement (&ldquo;User Agreement&rdquo;) applies to the relationship between OneGold, LLC, a
            Delaware limited liability company (&ldquo;ONEGOLD&rdquo;), and its customers and other users of its
            websites www.onegold.com and mobile.ONEGOLD.com (collectively, &ldquo;Website&rdquo;), the ONEGOLD
            mobile application (&ldquo;ONEGOLD Mobile App&rdquo;) and other services. These terms apply to all
            transactions, including, without limitations, transactions involving precious metals, whether made through
            the Website, the ONEGOLD Mobile App, by telephone or otherwise.
          </p>
        </div>

        <div className="mb-6 text-[17px] font-normal leading-[27.2px] text-[#161c2d]">
          <p>
            By using the Website, the ONEGOLD Mobile App and other services provided by ONEGOLD, including, without
            limitation, purchasing, selling, storing, and redeeming precious metals from ONEGOLD, you are agreeing to
            the following terms, including, without limitation, the terms available by hyperlink. Do not use the
            Website, the ONEGOLD Mobile App or the other services of ONEGOLD if you do not agree to this User
            Agreement.
          </p>
        </div>

        <div className="mb-6 text-[17px] font-normal leading-[27.2px] text-[#161c2d]">
          <p>
            PLEASE CAREFULLY AND COMPLETELY READ THIS AGREEMENT, WHICH GOVERNS YOUR RELATIONSHIP WITH US AND YOUR
            LEGAL RIGHTS. IF YOU DO NOT AGREE WITH THIS AGREEMENT AND/OR ANY OF THE TERMS CONTAINED HEREIN, YOU
            SHOULD NOT USE THE SERVICES; YOU SHOULD NOT MAKE ORDERS, SALES OR PURCHASE THROUGH THE WEBSITE, THE
            APPLICATION, BY TELEPHONE OR OTHERWISE.
          </p>
        </div>

        <div className="mb-6 text-[17px] font-normal leading-[27.2px] text-[#161c2d]">
          <p>
            THIS AGREEMENT REQUIRES, UNDER SECTION 16(F), BINDING ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE
            CERTAIN TYPES OF DISPUTES, EXCEPT AS PROVIDED IN THAT SECTION. YOU ARE AGREEING TO RESOLVE DISPUTES WITH
            US IN ACCORDANCE WITH THAT SECTION AND ARE WAIVING YOUR RIGHTS TO HAVE A COURT PROCEEDING AND A JURY
            TRIAL OR TO TAKE PART IN A CLASS ACTION.
          </p>
        </div>

        <div className="mb-8 text-[17px] font-normal leading-[27.2px] text-[#161c2d]">
          <p>
            This User Agreement contains the following sections. You may jump directly to any section by selecting the
            appropriate link below. The headings and the subheadings are for reference only and do not affect the
            meaning of the sections.
          </p>
        </div>

        {/* ── Table of Contents ── */}
        <nav className="mb-12">
          <ol className="list-decimal pl-[40px] text-[17px] leading-[27.2px]">
            {[
              "Definitions",
              "Your ONEGOLD Account",
              "Purchasing Digital Metal from ONEGOLD",
              "Sending Your Payment",
              "Ownership of Digital Metal",
              "Redeeming Your Digital Metal",
              "AutoInvest Program",
              "Shipping Physical Metal After Redemption",
              "International Orders Shipment of Physical Metal",
              "Return Policy for Physical Metal",
              "Selling to ONEGOLD",
              "Storage Fees",
              "Promotions",
              "Risks",
              "Market Loss Policy",
              "General Provisions",
            ].map((title, i) => (
              <li key={i} className="mb-[3px]">
                <a href={`#section-${i + 1}`} className="text-[#197eeb] hover:underline">
                  {title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 1 — Definitions
        ══════════════════════════════════════════════════════════════════ */}
        <section id="section-1" className="mb-10">
          <h2 className="mb-1 text-[17px] font-bold leading-[27.2px] text-[#161c2d]">1. Definitions</h2>
          <p className="mb-4 text-[17px] leading-[27.2px] text-[#161c2d]">
            The following terms have the following meanings in the User Agreement:
          </p>
          <ul className="list-disc pl-[40px] text-[17px] leading-[27.2px] text-[#161c2d] space-y-[3px]">
            <li>
              The term &ldquo;APMEX&rdquo; means APMEX LLC a Delaware limited liability company. APMEX provides
              services to, and on behalf of, ONEGOLD, not directly to customers or other users of ONEGOLD, and the
              customers and other users of ONEGOLD do not have any relationship with APMEX by virtue of their
              relationship with ONEGOLD.
            </li>
            <li>
              Business Day. The term &ldquo;Business Day(s)&rdquo; means a day other than a Saturday, a Sunday or a
              day that is a holiday under the federal law of the United States of America and/or the laws of the State
              of Oklahoma.
            </li>
            <li>
              Digital Metal. The term &ldquo;Digital Metal&rdquo; means a digital representation of physical Precious
              Metal held for the benefit of the owner in a storage facility, the ownership interest of which is
              recorded on the books and the records of ONEGOLD. Notwithstanding any else contained herein, a customer
              of ONEGOLD owns, and has title to, an interest in actual and tangible physical metal that is held in the
              storage facility on behalf of the customer. Digital Metal is held by Customers in an allocated and pooled
              position.
            </li>
            <li>
              Fair Market Value. The term &ldquo;Fair Market Value&rdquo; means the fair market value of the Digital
              Metal as determined by ONEGOLD, in its reasonable discretion.
            </li>
            <li>
              Market Gain. When a Purchase Order or Purchase, as the case may be, is cancelled by ONEGOLD, Market Gain
              occurs when the Fair Market Value on the date of the cancelled Purchase Order or Purchase is greater than
              the original price as it appears on the cancelled Purchase Order. The difference between the Fair Market
              Value less the original price is the Market Gain.
            </li>
            <li>
              Market Loss. When a Purchase Order or Purchase, as the case may be, is cancelled by ONEGOLD, Market Loss
              occurs when the Fair Market Value on the date of the cancelled Purchase Order or Purchase is less than
              the original price as it appears on the cancelled Purchase Order. The difference between the original
              price less the Fair Market Value is the Market Loss.
            </li>
            <li>
              The term &ldquo;ONEGOLD&rdquo; means OneGold, LLC, a Delaware limited liability company.
            </li>
            <li>
              ONEGOLD Account. The term &ldquo;ONEGOLD Account&rdquo; means an online account with ONEGOLD maintained
              by a customer.
            </li>
            <li>
              ONEGOLD Mobile App. The term &ldquo;ONEGOLD Mobile App&rdquo; means the ONEGOLD mobile application.
            </li>
            <li>
              The term &ldquo;Order&rdquo; means, as applicable, a confirmed Sale by a customer or a confirmed
              Purchase by a customer, whether such Order was made through the Website, the ONEGOLD Mobile App, by
              telephone or otherwise.
            </li>
            <li>
              Precious Metal. The term &ldquo;Precious Metal&rdquo; means gold, silver and platinum.
            </li>
            <li>
              The term &ldquo;Purchase&rdquo; means the acquisition of Digital Metal by a customer from ONEGOLD,
              whether made through the Website, ONEGOLD Mobile App, by telephone or otherwise, with the quantity and
              the price confirmed.
            </li>
            <li>
              Purchase Order. The term &ldquo;Purchase Order&rdquo; means an Order placed by a customer with ONEGOLD
              for the Purchase of Digital Metal.
            </li>
            <li>
              The term &ldquo;Sale&rdquo; means the redemption by a customer from ONEGOLD of Digital Metal, whether
              through the Website, the ONEGOLD Mobile App, by telephone or otherwise.
            </li>
            <li>
              Sale Order. The term &ldquo;Sale Order&rdquo; means an Order placed by a customer with ONEGOLD for the
              redemption of Digital Metal from the customer, with the quantity and the price confirmed.
            </li>
            <li>
              User Agreement. The term &ldquo;User Agreement&rdquo; means this User Agreement.
            </li>
            <li>
              User Content. The term &ldquo;User Content&rdquo; means content posted by a customer or a user on the
              Website, including, without limitation, any images or testimonials.
            </li>
            <li>
              The term &ldquo;Website&rdquo; means the websites located at www.OneGold.com and mobile.OneGold.com.
            </li>
          </ul>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 2 — Your ONEGOLD Account
        ══════════════════════════════════════════════════════════════════ */}
        <section id="section-2" className="mb-10">
          <h2 className="mb-4 text-[17px] font-bold leading-[27.2px] text-[#161c2d]">2. Your ONEGOLD Account</h2>
          <ul className="list-disc pl-[40px] text-[17px] leading-[27.2px] text-[#161c2d] space-y-4">
            <li>
              <strong>Opening a ONEGOLD Account.</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  You may choose to open a ONEGOLD Account with ONEGOLD that you can use to purchase, to sell, to
                  store and to redeem Digital Metal in accordance with this User Agreement.
                </li>
                <li>
                  When you open a ONEGOLD Account with ONEGOLD, you can deposit money to enable you to purchase
                  Digital Metal. You can deposit money to your ONEGOLD Account at any time.
                </li>
                <li>
                  You may open your ONEGOLD Account by following the instructions at the Website, in the ONEGOLD
                  Mobile App or by contacting ONEGOLD to assist in creating an account at (800) 492-9144.
                </li>
                <li>
                  You are responsible for maintaining adequate security and control of any and all IDs, passwords,
                  personal identification numbers (PINs) or any other codes that you use to access your ONEGOLD
                  Account. You are responsible for keeping your mailing address, email address and other contact
                  information up to date in your ONEGOLD Account profile.
                </li>
                <li>
                  You will need to provide certain information to ONEGOLD upon opening your ONEGOLD Account. If you
                  provide erroneous or incomplete information, ONEGOLD can decline to open a ONEGOLD Account or may
                  close your ONEGOLD Account at any time.
                </li>
              </ul>
            </li>
            <li>
              <strong>Funding a ONEGOLD Account</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  You may deposit funds to your ONEGOLD Account in any one of the following ways:
                  <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                    <li>credit card;</li>
                    <li>PayPal transfer;</li>
                    <li>personal check;</li>
                    <li>BitPay;</li>
                    <li>wire transfer; or</li>
                    <li>automated clearinghouse (ACH) transfer.</li>
                  </ul>
                </li>
                <li>
                  Depending on the method you use to deposit funds to your ONEGOLD Account, you may not have
                  immediate access to those funds to engage in transactions. Please see Section 3 below for
                  additional details on when your funds may become available for transactions.
                </li>
              </ul>
            </li>
            <li>
              <strong>Making Purchases from a ONEGOLD Account</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>There is no minimum transaction amount per transaction.</li>
                <li>
                  On Purchase Orders greater than $500,000.00 (USD), we recommend that you contact us at (800)
                  492-9144 to determine if a deposit will apply. ONEGOLD reserves the right to request a ten percent
                  (10%) deposit on Purchase Orders deemed &ldquo;significant&rdquo; by ONEGOLD, in its sole
                  discretion, before ONEGOLD will accept and confirm the Purchase Order and lock-in prices; ONEGOLD
                  may treat multiple Purchase Orders made on the same date as part of a single Purchase Order in
                  determining significance.
                </li>
                <li>
                  You may purchase Digital Metal using the funds you have in your ONEGOLD Account or you may purchase
                  the Digital Metal without pre-funding your account by choosing to pay by the methods listed above.
                  Your Purchase Order will be in a pending status until the funds are deposited and available for the
                  Purchase.
                </li>
                <li>
                  When you purchase online from ONEGOLD, the price at which your Purchase Order is submitted is the
                  locked-in price; you may also be responsible for any convenience fee that applies to a particular
                  payment method. You will receive an email confirming your Purchase Order and your confirmation
                  number will be in your email. The Purchase Order price is locked-in for two (2) Business Days for
                  wire transfer orders and five (5) Business Days for personal check orders. If you pay through your
                  cash balance in your ONEGOLD Account, credit card, PayPal, or BitPay, your payment will be
                  credited immediately. If you pay through a bank ACH transfer, your payment will be marked as
                  payment processing prior to settlement; no sale of the purchased Digital Metal may be made until
                  settlement occurs. Funds made through bank ACH transfer typically take up to five (5) Business
                  Days to settle. The locked-in period is the time you must make your payment to ONEGOLD to receive
                  the locked-in price.
                </li>
                <li>
                  If you do not make a timely deposit for payment to ONEGOLD, ONEGOLD, may, in its sole discretion,
                  (a) accept your deposit; (b) refuse your deposit and cancel your Purchase Order; (c) close your
                  ONEGOLD Account; and/or (d) preclude you from engaging in future transactions through ONEGOLD.
                </li>
                <li>
                  You have no right to cancel your Purchase Order once it is confirmed. An error in a Purchase must
                  be offset with an equivalent Sale of Digital Metal.
                </li>
                <li>
                  ONEGOLD reserves the right to cancel a Purchase at any time for any reason. Should your Purchase
                  Order be canceled by ONEGOLD, ONEGOLD will refund the full Purchase Order price minus any Market
                  Loss and processing and convenience fees, if any, applicable to the payment deposit method used for
                  the Purchase Order.
                </li>
              </ul>
            </li>
            <li>
              <strong>Withdrawing Funds from a ONEGOLD Account</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  You may request to withdraw funds from your ONEGOLD Account at any time by logging into the
                  Website and accessing the &ldquo;Withdraw&rdquo; section of the Website or by contacting ONEGOLD
                  at (800) 492-9144.
                </li>
                <li>
                  If you have at any time funded your ONEGOLD Account through an ACH transfer, you have the option
                  of having ONEGOLD transmit the funds that you are withdrawing through an ACH transfer.
                </li>
                <li>
                  ONEGOLD may transmit funds to you through your credit card or PayPal account if the ONEGOLD
                  Account was originally funded via credit card or PayPal within the last 60 days.
                </li>
                <li>
                  ONEGOLD may transmit funds to you through your originating bank account if the ONEGOLD Account was
                  originally funded via bank account last 60 days.
                </li>
                <li>
                  ONEGOLD reserves the right to transmit funds through an alternate payment method than you
                  requested or than as provided herein.
                </li>
              </ul>
            </li>
            <li>
              <strong>Closing a ONEGOLD Account</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  You may not close your ONEGOLD Account when there are any pending or scheduled Orders and you must
                  cancel AutoInvest prior to closing your ONEGOLD Account. When you close your ONEGOLD Account,
                  ONEGOLD will cancel any AutoInvest Orders. You must withdraw any balance from your ONEGOLD Account
                  before closing it.
                </li>
                <li>
                  You will remain liable for all obligations related to your ONEGOLD Account even after your ONEGOLD
                  Account is closed.
                </li>
                <li>
                  In certain cases, you may not close your ONEGOLD Account, including:
                  <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                    <li>if you are evading or attempting to evade an investigation;</li>
                    <li>if you have a pending or scheduled Order or an open dispute or claim;</li>
                    <li>if your ONEGOLD Account is subject to a hold, limitation or reserve; or</li>
                    <li>if your ONEGOLD Account has any outstanding storage or other fees.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>ONEGOLD Account Information</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  You may view details of your ONEGOLD Account by logging into your ONEGOLD Account.
                </li>
                <li>
                  You may request records related to your ONEGOLD Account. ONEGOLD may charge you a fee per item
                  requested. However, ONEGOLD will not charge you for records requested in connection with your
                  good-faith assertion of an error in your ONEGOLD Account.
                </li>
              </ul>
            </li>
            <li>
              <strong>Additional Details</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  ONEGOLD reserves the right to close your ONEGOLD Account at any time in ONEGOLD&rsquo;s sole
                  discretion.
                </li>
                <li>Balances in your ONEGOLD Account will not earn interest.</li>
                <li>
                  Balances in your ONEGOLD Account will not be eligible for deposit insurance by the Federal Deposit
                  Insurance Corporation (FDIC), for insurance by the Securities Investor Protection Corporation
                  (SIPC) or for any other similar insurance.
                </li>
                <li>
                  ONEGOLD will deposit any funds received from you in a bank account segregated from the operating
                  accounts of ONEGOLD; such segregated account may, however, contain funds from multiple clients.
                  ONEGOLD may earn interest on those funds but you will not receive such interest.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 3 — Purchasing Digital Metal from ONEGOLD
        ══════════════════════════════════════════════════════════════════ */}
        <section id="section-3" className="mb-10">
          <h2 className="mb-1 text-[17px] font-bold leading-[27.2px] text-[#161c2d]">
            3. Purchasing Digital Metal from ONEGOLD
          </h2>
          <p className="mb-4 text-[17px] leading-[27.2px] text-[#161c2d]">
            In addition to the other provisions of this User Agreement, Purchases are subject to the following:
          </p>
          <ul className="list-disc pl-[40px] text-[17px] leading-[27.2px] text-[#161c2d] space-y-4">
            <li>
              <strong>Cancellations of Orders with ONEGOLD</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  Once ONEGOLD has issued a Purchase Order confirmation, (a) the price is locked-in and (b) there is
                  a binding contract between ONEGOLD and you for your Purchase and, as a result, any market risk for
                  breach is transferred to you upon issuance of the Purchase Order confirmation.
                </li>
                <li>You have no right to cancel your Purchase Order.</li>
                <li>
                  However, if you breach your payment or any other obligation, ONEGOLD may cancel your Order(s). In
                  addition, ONEGOLD reserves the right to cancel any Order at any time and for any reason. Should
                  your Purchase Order be canceled by ONEGOLD, ONEGOLD will refund the full Purchase Order price
                  minus any Market Loss and any processing and convenience fees, if any, applicable to using the
                  payment deposit method used for the Purchase Order.
                </li>
                <li>
                  If a Purchase Order is canceled in violation of this User Agreement, whether due to insufficient
                  funds, by recalling a payment or otherwise, you are responsible to ONEGOLD for any Market Loss
                  plus a $35.00 (USD) cancellation fee. The Purchase Order cancellation will be confirmed, and you
                  will be given a cancellation number. At that time, if any Market Loss has occurred, it will be
                  calculated and added to the $35.00 (USD) cancellation fee. You must remit immediately (upon
                  notice) to ONEGOLD good funds for any Market Loss and the cancellation fee. No future Orders by
                  you may be permitted unless and until any Market Loss and the cancellation fee are paid in full.
                  Upon written confirmation by ONEGOLD of your payment of any Market Loss and the $35.00 (USD)
                  cancellation fee, ONEGOLD will not pursue any other damages associated with Order cancellation.
                </li>
                <li>
                  Any Market Gain on Purchase Order cancellations belongs to, and shall remain the property of,
                  ONEGOLD.
                </li>
                <li>
                  ONEGOLD may take appropriate action to collect the Market Loss and/or the cancellation fee, such
                  as deducting cash from your ONEGOLD Account or liquidating Digital Metal in your ONEGOLD Account.
                </li>
              </ul>
            </li>
            <li>
              <strong>Order Changes</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  Because an Order may not be changed, ONEGOLD suggests you take the time up front to make sure what
                  you want is exactly what you request from us as reflected in the Order.
                </li>
              </ul>
            </li>
            <li>
              <strong>Other Order Payment Information</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  The general Order payment requirements, as well as the consequences of failing to make a payment,
                  are set forth in Item 2(A).
                </li>
                <li>
                  The decision on how to pay for your Order is your decision. However, it is always best to pay
                  through your ONEGOLD Account or to send ONEGOLD your payment immediately to complete your
                  transaction with ONEGOLD and to avoid any possible default, so you can receive the locked-in
                  price. When making payment by mail or wire, ONEGOLD recommends making payment the same day your
                  Order is placed and, when mailing payment, that you use a courier service that offers priority
                  delivery and that provides you with a tracking number to ensure timely delivery and tracking
                  capabilities.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 4 — Sending Your Payment
        ══════════════════════════════════════════════════════════════════ */}
        <section id="section-4" className="mb-10">
          <h2 className="mb-4 text-[17px] font-bold leading-[27.2px] text-[#161c2d]">4. Sending Your Payment</h2>
          <ul className="list-disc pl-[40px] text-[17px] leading-[27.2px] text-[#161c2d] space-y-4">
            <li>
              Payment instructions will be issued online on the final page of the online Purchase Order process and
              again by email after you place your Purchase Order. If you do not pay in full through your ONEGOLD
              Account, payment must be dated within twenty-four (24) hours of your Purchase Order date. If you
              default and you do not meet these requirements, ONEGOLD reserves the right to cancel the Purchase
              Order.
            </li>
            <li>ONEGOLD does not accept C.O.D. for Purchase Orders.</li>
            <li>
              <strong>Payment Options</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>You may always pay through your ONEGOLD Account.</li>
                <li>
                  Depending upon the Purchase Order amount, you may also pay by some or all of the following payment
                  methods: credit card, PayPal, Bitcoin or other crypto-currency, bank wire, personal check, or ACH.
                </li>
              </ul>
            </li>
            <li>
              <strong>Bank ACH Orders</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  If creating a bank ACH fund Order, ONEGOLD will advance you the funds in your ONEGOLD Account and
                  will credit payment immediately. However, funds made through bank ACH transfer may take up to five
                  (5) business days to settle from your bank account to ONEGOLD&rsquo;s bank account and, while you
                  may use the funds for a Purchase Order, you may not sell the purchased Digital Metal prior to
                  settlement.
                </li>
                <li>
                  If payment does not settle or is recalled or funds are insufficient, ONEGOLD reserves the right to
                  cancel Orders funded by bank ACH transfer and reverse the funds that ONEGOLD has advanced to you.
                </li>
              </ul>
            </li>
            <li>
              <strong>Collection Period on Checks</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  Cashier&rsquo;s checks, certified checks and personal checks are deposited for collection and the
                  typical period before we mark as settled/completed is from five (5) to ten (10) Business Days,
                  regardless of when such checks may clear the banking system.
                </li>
                <li>ONEGOLD must receive payment for check orders within five (5) Business Days.</li>
              </ul>
            </li>
            <li>
              <strong>Wiring Funds</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  Once you have placed a Purchase Order and we have issued a confirmation number, we will provide you
                  wire instructions, including our bank name, ABA routing number and account number.
                </li>
                <li>ONEGOLD must receive payment for wire orders within two (2) Business Days.</li>
              </ul>
            </li>
            <li>
              <strong>Good Funds Policy</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  &ldquo;Good funds&rdquo; is the day we receive your direct bank wire and generally from five (5)
                  to ten (10) Business Days from the day we receive your cashier&rsquo;s check, certified check or
                  personal check. There may be an additional delay for a check if your bank does not cooperate with
                  us on the information needed to verify your transaction.
                </li>
              </ul>
            </li>
            <li>
              <strong>Credit Card</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  ONEGOLD may accept, is not obligated to accept, credit card payments for a Purchase Order. All
                  credit card orders are reviewed on an order by order basis and we reserve the right to refuse any
                  order deemed questionable or of significant risk to ONEGOLD regardless of payment method and price
                  confirmation and in such case, you waive any right to any claim or actual damages of any kind or
                  nature whatsoever. ONEGOLD has the right to refuse any credit card payment in its sole discretion.
                </li>
              </ul>
            </li>
            <li>
              <strong>Currencies</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  We currently accept payments for Purchase Orders only in U.S. dollars (USD).
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 5 — Ownership of Digital Metal
        ══════════════════════════════════════════════════════════════════ */}
        <section id="section-5" className="mb-10">
          <h2 className="mb-4 text-[17px] font-bold leading-[27.2px] text-[#161c2d]">
            5. Ownership of Digital Metal
          </h2>
          <ul className="list-disc pl-[40px] text-[17px] leading-[27.2px] text-[#161c2d] space-y-[3px]">
            <li>
              Upon confirmation of your payment in accordance with this User Agreement, you will become the owner of
              the Digital Metal covered by your Purchase Order. Notwithstanding any else contained herein, you will
              own, and have title to, the actual and tangible physical metal that is held in a physically secure
              location on your behalf. Digital Metal is held by Customers in an allocated and pooled position.
            </li>
            <li>
              Such ownership will be reflected in your ONEGOLD Account. You may view your holdings online at any
              time.
            </li>
            <li>
              At the end of every quarter, ONEGOLD will email to your email on file a link a statement summarizing
              your Digital Metal holdings with ONEGOLD.
            </li>
            <li>
              All products are stored in physically secure facilities and fully insured for theft and physical loss. A
              physically secure location is a location that we have determined to provide adequate physical security
              for the products. In the United States, storage locations may include APMEX, Brinks, Loomis
              International, or other Comex Approved locations or the minting facilities of APMEX and its sister
              company. In Canada, storage locations may include the Royal Canadian Mint. In Switzerland, storage
              locations may include Brinks or the minting facility of MKS PAMP. In the United Kingdom, storage
              locations may include Brinks or Loomis International. Within each country, products may be moved within
              those physically secure locations and, in the case of the minting facilities, may be processed by
              APMEX, its sister company, or MKS PAMP.
            </li>
            <li>
              All customer ounces are verified once a year by a top 10 U.S. accounting firm. In Canada, products are
              also verified by the Royal Canadian Mint, a Crown corporation of the Government of Canada.
            </li>
            <li>
              You and ONEGOLD agree that your Digital Metal is a &ldquo;financial asset&rdquo; for purposes of
              Article 8 of the Uniform Commercial Code as adopted by the State of Delaware.
            </li>
          </ul>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 6 — Redeeming Your Digital Metal
        ══════════════════════════════════════════════════════════════════ */}
        <section id="section-6" className="mb-10">
          <h2 className="mb-4 text-[17px] font-bold leading-[27.2px] text-[#161c2d]">
            6. Redeeming Your Digital Metal
          </h2>
          <ul className="list-disc pl-[40px] text-[17px] leading-[27.2px] text-[#161c2d] space-y-[3px]">
            <li>
              At any time, you may redeem a portion or all of your Digital Metal and have physical metal delivered to
              you, subject to applicable minimum redemption amounts and processing fees. Any such redemption will be
              processed at the then applicable sales price for such Digital Metal on the website www.apmex.com.
              Redeeming through ONEGOLD is the only redemption option that is available for you to redeem your
              Digital Metal.
            </li>
            <li>
              That redemption value may not be the best price that you could receive on the open market. That
              redemption value will be derived based on a proprietary algorithm of ONEGOLD and is determined in
              ONEGOLD&rsquo;s sole discretion.
            </li>
            <li>
              If you wish to redeem a portion or all of your Digital Metal in exchange for physical metal, you may
              log on to your ONEGOLD Account or contact us at (800) 492-9144.
            </li>
            <li>
              When you select the option to redeem your Digital Metal, ONEGOLD will provide you with a quote for the
              redemption price.
            </li>
            <li>
              Once you finalize your redemption, your redemption will be treated as a Sale Order and the relevant
              procedures described herein will apply.
            </li>
            <li>
              Subject to the account opening criteria and any other limitations or restrictions on physical Precious
              Metal custody established by a storage facility, including any additional storage or metal conversion
              charges or premiums that may be assessed by the storage facility, you may be entitled to dismiss
              ONEGOLD and maintain your physical Precious Metal directly at the storage facility.
            </li>
          </ul>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 7 — AutoInvest Program
        ══════════════════════════════════════════════════════════════════ */}
        <section id="section-7" className="mb-10">
          <h2 className="mb-4 text-[17px] font-bold leading-[27.2px] text-[#161c2d]">7. AutoInvest Program</h2>
          <ul className="list-disc pl-[40px] text-[17px] leading-[27.2px] text-[#161c2d] space-y-[3px]">
            <li>
              You may set up recurring Purchase Orders with ONEGOLD at a frequency of your choosing. You may opt
              into several options to schedule your recurring Purchase Orders: daily, weekly, bi-weekly, monthly, or
              quarterly. Your billing schedule will depend on the date you enroll in the AutoInvest Program and the
              frequency you select.
            </li>
            <li>
              To have recurring Purchase Orders effected, you must keep your selected payment method in good
              standing. If a change or an update to your payment method is necessary, it is your responsibility to
              contact ONEGOLD or login to your ONEGOLD Account to make the appropriate change. If your payment
              method is not kept current and in good standing, ONEGOLD may terminate the recurring Purchase Orders
              and you will need to set up new recurring Purchase Orders with a payment method in good standing.
            </li>
            <li>
              If you elect to set up recurring Purchase Orders, you are required to keep the payment method you
              choose adequately funded. If ONEGOLD receives a chargeback related to any recurring Purchase Order,
              ONEGOLD will cancel that Purchase Order and all future recurring Purchase Orders and you will be
              responsible for any Market Loss be charged a fee of $35.00 (USD) for each Purchase Order. ONEGOLD is
              not responsible for the loss of any potential gain associated with your cancelled Purchase Orders.
            </li>
            <li>
              You may cancel your recurring Purchase Orders at any time on the Website under the Settings section of
              your ONEGOLD Account or through the ONEGOLD Mobile App.
            </li>
          </ul>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 8 — Shipping Physical Metal After Redemption
        ══════════════════════════════════════════════════════════════════ */}
        <section id="section-8" className="mb-10">
          <h2 className="mb-4 text-[17px] font-bold leading-[27.2px] text-[#161c2d]">
            8. Shipping Physical Metal After Redemption
          </h2>
          <ul className="list-disc pl-[40px] text-[17px] leading-[27.2px] text-[#161c2d] space-y-[3px]">
            <li>
              The physical metal to which you are entitled on redemption will be shipped by APMEX on behalf of
              ONEGOLD, at its discretion, by registered and/or insured U.S. Mail, UPS, Federal Express or another
              carrier. Packages sent by registered and/or insured U.S. Mail can take an average of five (5) to ten
              (10) Business Days to receive.
            </li>
            <li>
              You may be charged shipping, handling and insurance charges of $9.99 (USD) for shipments of physical
              metal with a redemption value of less than $100.00 (USD). You will not be charged shipping, handling
              and insurance charges for shipments of physical metal with a redemption price of $100.00 (USD) or more.
            </li>
            <li>
              All physical metal shipments to you will be insured for the redemption price of the shipped physical
              metal, subject to the limitations contained herein and in the applicable insurance policy. Should
              anything happen while your package is in transit to you, you may be permitted to claim coverage under
              the applicable insurance policy provided that you directly receive the package from the common carrier.
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  When a shipment is made to you, if physical metal is lost or damaged in transit, it is
                  ONEGOLD&rsquo;s responsibility through APMEX as its agent to pursue any claim with the insurance
                  company. If APMEX as the agent of ONEGOLD determines the package is lost or damaged, APMEX as the
                  agent of ONEGOLD files a claim. Once the claim is filed, APMEX as the agent of ONEGOLD may re-ship
                  your items or refund your money at its discretion, and ONEGOLD (and APMEX as its agent) shall have
                  no further responsibility or liability to you.
                </li>
                <li>
                  If there is any disruption in the delivery of a package to you, you agree to cooperate in any
                  investigation or claim process and to take every reasonable action necessary or requested of you in
                  the process. Failure to fully cooperate will jeopardize coverage that might otherwise be available
                  for your loss.
                </li>
                <li>
                  Neither ONEGOLD (and APMEX as its agent) nor the insurance company accepts (and ONEGOLD (and
                  APMEX as its agent) specifically disclaims) responsibility if you have left instructions with any
                  carrier or delivery service to leave parcels for you without your signature. Nor do ONEGOLD (and
                  APMEX as its agent), nor our insurance company, accept (and ONEGOLD (and APMEX as its agent)
                  specifically disclaim) responsibility if you have given any carrier or delivery service
                  instructions to leave your package with someone else, such as a building manager, neighbor or a
                  drop-off location such as Mail Boxes Etc., The UPS Store, or similar third party drop off
                  locations. In any such case, your package will not be covered by insurance. If you do not receive
                  the package directly from the common carrier, you must take all reasonable actions to assist in
                  recovery of the package, including, without limitation, filing out reports (and/or police reports)
                  and providing all documents and information needed or requested to assist in recovery of the
                  package. If you do not fully cooperate in recovery efforts, neither ONEGOLD (and APMEX as its
                  agent) nor APMEX&rsquo;s insurance company or carrier will have any liability to you. ONEGOLD (or
                  APMEX as its agent) must be notified of a lost package within thirty (30) days from the shipment
                  date of the package.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 9 — International Orders Shipment of Physical Metal
        ══════════════════════════════════════════════════════════════════ */}
        <section id="section-9" className="mb-10">
          <h2 className="mb-4 text-[17px] font-bold leading-[27.2px] text-[#161c2d]">
            9. International Orders Shipment of Physical Metal
          </h2>
          <ul className="list-disc pl-[40px] text-[17px] leading-[27.2px] text-[#161c2d] space-y-4">
            <li>
              <strong>Duties and Taxes</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  All duties and taxes must be paid by the customer on Sale Order(s) for Physical Metal. You may be
                  subject to taxes and/or duties for your redemption from ONEGOLD. Please consult your local customs
                  broker for more information on duty and tax rates.
                </li>
                <li>
                  All shipping amounts listed below are approximations based on information as the date that this
                  User Agreement became effective. Please call us for the most current shipping charges.
                </li>
                <li>
                  ONEGOLD (and its agent APMEX) always declare the full value of the shipment on any customs form.
                  There are no exceptions to this policy.
                </li>
              </ul>
            </li>
            <li>
              <strong>International Delivery Requirements</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  If your Physical Metal is returned due to your refusal to pay duties or taxes or if the carrier is
                  unable to deliver your Physical Metal, you are responsible for any return shipping fees, additional
                  duties or applicable taxes for returning the package back to ONEGOLD. In addition, if your package
                  is returned, your Physical Metal will not be reshipped unless and until receipt of payment in full
                  for any return shipping costs, duties and taxes paid or advance for you as well as any subsequent
                  re-shipment fees back to you.
                </li>
                <li>
                  International returns on Physical Metal are very costly and we strongly suggest making yourself
                  aware of any duties or taxes before packages are shipped to avoid surprises. In addition, we
                  strongly suggest making yourself available to the delivery company, so your package is not
                  returned, subjecting you to unnecessary taxes, duties, shipping costs or delays. Delays for
                  Physical Metal re-shipment could take four (4) to six (6) weeks or longer to complete when
                  packages are not received as they should be. If you have any questions about your international
                  shipment, please send an inquiry to support@OneGold.com.
                </li>
                <li>
                  Currently, all Physical Metal shipments must be shipped to a physical address and a delivery zone
                  surcharge may apply. APMEX (as the agent for ONEGOLD) does not typically send Physical Metal to
                  international customers using freight forwarding services, such as Vpost addresses. If Sale Orders
                  are placed online with Vpost or freight forwarding addresses, all risk of loss for such
                  transactions is borne by you once delivers your product to the freight forwarding service or Vpost.
                  <ul className="list-disc pl-[40px] mt-[3px] space-y-4">
                    <li>
                      <strong>Canada</strong>
                      <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                        <li>
                          Shipping charges for shipping Physical Metal to Canada are approximately $39.95 (USD).
                        </li>
                        <li>
                          The minimum value of Physical Metal that APMEX (as agent for ONEGOLD) will ship to Canada
                          is $250.00 (USD).
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Europe</strong>
                      <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                        <li>
                          APMEX (as agent for ONEGOLD) currently ships Physical Metal to Austria, Belgium, Czech
                          Republic, Denmark, Finland, France, Germany, Greece, Ireland, Italy, Netherlands, Norway,
                          Poland, Portugal, Spain, Sweden, Switzerland and the United Kingdom.
                        </li>
                        <li>
                          Shipping charges for sending Physical Metal to Europe are approximately $49.95 (USD) plus
                          an additional estimated $0.25 (USD) per troy ounce weight surcharge.
                        </li>
                        <li>
                          The minimum value of Physical Metal that APMEX (as agent for ONEGOLD) will ship to Europe
                          is $250.00 (USD).
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Asia</strong>
                      <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                        <li>
                          APMEX (as agent for ONEGOLD) currently ships Physical Metal to Hong Kong, Japan, Macau,
                          Malaysia, Singapore, South Korea and Taiwan.
                        </li>
                        <li>
                          Shipping charges for sending Physical Metal to Asia are approximately $49.95 (USD) plus an
                          additional estimated $0.25 to $0.30 (USD) per troy ounce weight surcharge, depending upon
                          the country.
                        </li>
                        <li>
                          The minimum value of Physical Metal that APMEX (as agent for ONEGOLD) will ship to Asia is
                          $250.00 (USD).
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Australia</strong>
                      <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                        <li>
                          Shipping charges for sending Physical Metal to Australia are approximately $49.95 (USD)
                          plus an additional estimated $0.25 (USD) per troy ounce weight surcharge.
                        </li>
                        <li>
                          The minimum value of Physical Metal that APMEX (as agent for ONEGOLD) will ship to
                          Australia is $250.00 (USD).
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>New Zealand</strong>
                      <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                        <li>
                          Shipping charges for sending Physical Metal to New Zealand are approximately $59.95 (USD)
                          plus an additional estimated $0.30 (USD) per troy ounce weight surcharge.
                        </li>
                        <li>
                          The minimum value of Physical Metal that APMEX (as agent for ONEGOLD) will ship to New
                          Zealand is $250.00 (USD).
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Other Countries</strong>
                      <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                        <li>
                          Shipping charges for sending Physical Metal to Cayman Islands, Israel, Mexico and the
                          United Arab Emirates are $49.95 (USD) plus an additional estimated $0.25 (USD) per troy
                          ounce weight surcharge. Shipping charges for redemption Orders to South Africa are $59.95
                          (USD) plus an additional estimated $0.40 (USD) per troy ounce weight surcharge.
                        </li>
                        <li>
                          The minimum value of Physical Metal that APMEX (as agent for ONEGOLD) will ship to the
                          countries listed above is $250.00 (USD).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 10 — Return Policy for Physical Metal
        ══════════════════════════════════════════════════════════════════ */}
        <section id="section-10" className="mb-10">
          <h2 className="mb-4 text-[17px] font-bold leading-[27.2px] text-[#161c2d]">
            10. Return Policy for Physical Metal
          </h2>
          <ul className="list-disc pl-[40px] text-[17px] leading-[27.2px] text-[#161c2d] space-y-[3px]">
            <li>
              We want our customers to be satisfied with their redeemed Physical Metal from ONEGOLD. At your request,
              we may, but are not obligated to, provide you with an opportunity to exchange redeemed Physical Metal
              for an identical equivalent product in the event of a material defect. If we agree to do so, such
              exchange must be made within seven (7) days from the date on which the customer receives his or her
              Physical Metal and only to those customers that timely and properly notify ONEGOLD by telephone at
              (800) 492-9144 and that receive written confirmation that the exchange request has been approved. If
              approved, ONEGOLD will give you instructions on how to exchange your items.
            </li>
            <li>
              Shipping and handling charges are non-refundable. For approved exchanges, you must follow all
              instructions provided by ONEGOLD, including carefully packaging the Physical Metal. You are responsible
              for the cost of return shipping and the risk of loss during the return shipment as part of the
              exchange. ONEGOLD reserves the right, at its sole discretion, to reject any exchange that does not
              comply with these requirements. If an exchange is requested, we reserve the right to accept or to
              refuse the exchange request in our sole discretion, and to require you to pay for any Market Loss on
              approved exchanges. Any Market Gain on refunds shall belong to, and remains the property of, ONEGOLD.
            </li>
          </ul>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 11 — Selling to ONEGOLD
        ══════════════════════════════════════════════════════════════════ */}
        <section id="section-11" className="mb-10">
          <h2 className="mb-4 text-[17px] font-bold leading-[27.2px] text-[#161c2d]">11. Selling to ONEGOLD</h2>
          <ul className="list-disc pl-[40px] text-[17px] leading-[27.2px] text-[#161c2d] space-y-[3px]">
            <li>
              If you sell Digital Metal to ONEGOLD, the sale is final and any errors made in the sale will need to be
              offset with a subsequent buy. Sales cannot be canceled once they are confirmed.
            </li>
            <li>
              You also agree and understand that premiums for Digital Metal vary based on current market value,
              demand, and other related factors and the buyback price ONEGOLD offers may not be directly correlated
              to the price you paid for the product at the time of purchase.
            </li>
            <li>
              ONEGOLD may adjust buy premiums at its discretion unless a sales confirmation has already been issued.
            </li>
            <li>
              You understand and agree that ONEGOLD is not obligated to purchase your Digital Metal. Under Federal
              securities laws, ONEGOLD must retain the right discontinue its purchases of Digital Metal from
              customers at any time without notice. While ONEGOLD does not currently intend to exercise this right,
              you should not rely on any such ability to sell your Digital Metal to ONEGOLD for any benefits,
              including achieving trading profits, or limiting trading or other losses.
            </li>
          </ul>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 12 — Storage Fees
        ══════════════════════════════════════════════════════════════════ */}
        <section id="section-12" className="mb-10">
          <h2 className="mb-4 text-[17px] font-bold leading-[27.2px] text-[#161c2d]">12. Storage Fees</h2>
          <ul className="list-disc pl-[40px] text-[17px] leading-[27.2px] text-[#161c2d] space-y-[3px]">
            <li>
              ONEGOLD may charge a storage fee determined by ONEGOLD, from time to time, for Digital Metals; to the
              extent that ONEGOLD changes, from time to time, such storage fees, ONEGOLD shall post a notice of such
              change on the Website at least 30 days before the effective date of such change. Any such charge is
              billed periodically as determined by ONEGOLD (currently quarterly) and is calculated by multiplying
              the average daily balance of each Digital Metal product in your ONEGOLD Account by the storage fee
              charged for each product. Storage fees may vary by product and/or location.
            </li>
            <li>ONEGOLD reserves the right to charge a minimum storage fee.</li>
            <li>
              At the end of each period, ONEGOLD will email a statement to your email address on file with a storage
              invoice. A storage invoice must be paid for in full on or before the due date.
            </li>
            <li>
              If storage invoices are not paid by the due date, ONEGOLD reserves the right to take appropriate
              action, such as deducting cash from your ONEGOLD Account or liquidating Digital Metal in your ONEGOLD
              Account.
            </li>
          </ul>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 13 — Promotions
        ══════════════════════════════════════════════════════════════════ */}
        <section id="section-13" className="mb-10">
          <h2 className="mb-4 text-[17px] font-bold leading-[27.2px] text-[#161c2d]">13. Promotions</h2>
          <ul className="list-disc pl-[40px] text-[17px] leading-[27.2px] text-[#161c2d] space-y-[3px]">
            <li>From time to time, ONEGOLD may offer promotions.</li>
            <li>
              Promotions can vary and may include incentives, such as, without limitation, offering cash or a credit
              on opening a ONEGOLD Account or cash or a credit on referring new customers to ONEGOLD. The terms of
              any such promotion will be determined by ONEGOLD, in its sole discretion.
            </li>
            <li>
              Receipt of any incentive requires compliance with the terms of the promotion. A customer will not be
              entitled to receive an incentive if ONEGOLD determines, in its discretion, that:
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>the customer did not meet the terms of the promotion;</li>
                <li>the ONEGOLD Account is suspicious or fraudulent;</li>
                <li>the ONEGOLD Account is dormant or inactive; or</li>
                <li>the customer is abusing the promotion.</li>
              </ul>
            </li>
            <li>
              To the extent that a customer has received an incentive to which ONEGOLD determines the customer is not
              entitled, ONEGOLD may take any appropriate action, such as, without limitation, cancelling the credit
              balance, deducting cash from the ONEGOLD Account or liquidating Digital Metals in the ONEGOLD Account
              to repay the cash or the credit.
            </li>
          </ul>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 14 — Risks
        ══════════════════════════════════════════════════════════════════ */}
        <section id="section-14" className="mb-10">
          <h2 className="mb-4 text-[17px] font-bold leading-[27.2px] text-[#161c2d]">14. Risks</h2>
          <ul className="list-disc pl-[40px] text-[17px] leading-[27.2px] text-[#161c2d] space-y-[3px]">
            <li>
              All transactions in precious metals involve risk; Digital Metal is no exception. The value of Digital
              Metal is based on the value of the Physical Metal to which it relates and is affected by many economic
              factors, including, without limitation, the current market price of Physical Metal, the perceived
              scarcity of the Physical Metal and other factors, such as the quality and current demand and general
              market sentiment.
            </li>
            <li>
              Therefore, because Physical Metal can go down in price as well as up, Digital Metal may not be suitable
              for everyone. Because all investments, including Digital Metal, can decline in value, you should
              understand them well, and have adequate cash reserves and disposable income before considering a
              Digital Metal investment.
            </li>
            <li>
              Like many markets, the precious metals market is speculative and is largely unregulated.
            </li>
            <li>
              The prices for precious metals will fluctuate throughout the day. If you are considering purchasing
              precious metals, you should assess the stability of the current market.
            </li>
            <li>
              ONEGOLD encourages you to discuss investments in precious metals and the associated benefits and risks
              with your financial advisor.
            </li>
          </ul>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 15 — Market Loss Policy
        ══════════════════════════════════════════════════════════════════ */}
        <section id="section-15" className="mb-10">
          <h2 className="mb-4 text-[17px] font-bold leading-[27.2px] text-[#161c2d]">15. Market Loss Policy</h2>
          <ul className="list-disc pl-[40px] text-[17px] leading-[27.2px] text-[#161c2d] space-y-[3px]">
            <li>
              When you buy from ONEGOLD, once we have issued a Purchase Order confirmation number, you have a binding
              contract, the transaction price is locked-in and any corresponding market risk is transferred to you.
              This is a benefit to you because you know your price at your Purchase Order confirmation time and we
              believe this is one of the key benefits of transacting with ONEGOLD. If you default in your
              performance of payment, shipment or any other act required by you, we may cancel your Purchase
              Order(s). If your Purchase Order(s) is cancelled, you agree you have full responsibility and liability
              to ONEGOLD for any Market Loss, plus a thirty-five dollar ($35.00 USD) cancellation fee. You must also
              pay, and have full responsibility and liability to, ONEGOLD for all fees and costs associated with
              ONEGOLD&rsquo;s efforts in collecting from you. Any Market Gain on Purchase Order cancellations shall
              vest in and remain the property of ONEGOLD, and ONEGOLD shall have no responsibility to you for Market
              Gain. We reserve the right to cancel any Purchase Order at any time and for any reason. All future
              requests to withdraw funds or redeem for physical metals will be held until any/all outstanding Market
              Loss and/or cancellation fee balances have been paid in full.
            </li>
          </ul>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 16 — General Provisions
        ══════════════════════════════════════════════════════════════════ */}
        <section id="section-16" className="mb-10">
          <h2 className="mb-4 text-[17px] font-bold leading-[27.2px] text-[#161c2d]">16. General Provisions</h2>
          <ul className="list-disc pl-[40px] text-[17px] leading-[27.2px] text-[#161c2d] space-y-[3px]">
            <li>
              Absence of Relationship. The sole relationship between ONEGOLD and you is that of buyer-seller. No
              other relationship, including, without limitation, any agent-principal relationship, any
              employee-employer relationship, any franchisee-franchisor relationship, any joint venture relationship
              or any partnership relationship, between ONEGOLD and you exists. Your Digital Metal does not evidence
              an ownership interest in ONEGOLD or any other entity and does not confer voting rights in any such
              entity. Your Digital Metal does not entitle you to dividends or shares in the profits of ONEGOLD or
              any other entity.
            </li>
            <li>
              You may not assign any of your rights or obligations under this User Agreement without the prior
              written consent of ONEGOLD, which may be granted or withheld by ONEGOLD in its sole discretion. This
              User Agreement shall be binding on all permitted assigns and successors of OneGold and you.
            </li>
            <li>
              You are responsible for the confidentiality of information about your transaction. You shall be very
              careful about disclosing information about your transactions with ONEGOLD and should carefully consider
              any disclosure of such information that you make to third parties.
            </li>
            <li>
              Governing Law. This User Agreement is governed by, and shall be interpreted in accordance with the
              laws of the State of Oklahoma, without giving effect to conflict of law principles.
            </li>
            <li>
              DISPUTE RESOLUTION; GOVERNING LAW. Any and all claims or disputes (except claims related to
              intellectual property rights), arising under, or in connection with, this Agreement and the
              transactions between you and us shall be resolved by mandatory, binding arbitration conducted in New
              Castle County, Delaware in accordance with the Commercial Arbitration Rules of the American
              Arbitration Association. Claims related to intellectual property rights arising under this Agreement
              and the transactions between you and us shall be resolved exclusively in the federal and state courts
              located in New Castle County, Delaware, which shall have exclusive jurisdiction of all actions related
              to such claims. You hereby consent to personal jurisdiction and venue in those federal and state courts
              for the purpose of resolving any disagreements or disputes between us and you and waive all objections
              to the jurisdiction of such federal and state courts. This Agreement is governed by, and interpreted in
              accordance with, the federal laws of the United States and the laws of the State of Delaware, without
              regard to conflict of laws principles. ANY CLAIM OR DISPUTE RELATING TO, OR ARISING IN CONNECTION
              WITH, THIS AGREEMENT OR THE TRANSACTIONS BETWEEN YOU AND US MUST BE INITIATED WITHIN 1 YEAR OF THE
              DATE ON WHICH THEY ARISE. If ONEGOLD prevails in any proceeding to enforce this Agreement, you agree
              to pay for all reasonable costs and expenses incurred by us, including, without limitation, reasonable
              attorneys&rsquo; fees. ANY CLAIM OR DISPUTE SUBMITTED TO ARBITRATION HEREUNDER MUST BE ARBITRATED ON
              AN INDIVIDUAL BASIS AND NOT ON A CLASS BASIS. CLAIMS OF MORE THAN ONE CUSTOMER OR USER CANNOT BE
              ARBITRATED JOINTLY OR CONSOLIDATED WITH THOSE OF ANY OTHER CUSTOMER OR USER. BY ACCEPTING THIS
              AGREEMENT, YOU WAIVE YOUR RIGHT TO TRIAL BY JURY IN CONNECTION WITH ANY DISAGREEMENT OR DISPUTE
              ARISING OUT OF, OR RELATING TO, THIS AGREEMENT AND THE TRANSACTIONS BETWEEN YOU AND US.
            </li>
            <li>
              Force Majeure. If ONEGOLD cannot perform any obligation hereunder as a result of any event that is
              beyond its control, ONEGOLD&rsquo;s delay or failure to perform such obligation shall be excused and
              ONEGOLD shall not be liable for any damages as a result of, or in connection with, any such delay or
              failure.
            </li>
            <li>
              Further Assurances. You shall execute and deliver such other documents and take such other actions as
              may be reasonably requested by ONEGOLD to carry out your obligations under the User Agreement.
            </li>
            <li>
              Except as otherwise provided herein, all notices and other communications to ONEGOLD shall be directed
              to OneGold, LLC, a Delaware limited liability company, c/o Chief Financial Officer, 226 Dean A. McGee
              Ave, Oklahoma City, Oklahoma 73102, and all other notices and other communications to you shall be
              directed to your last address as reflected by the records of ONEGOLD.
            </li>
            <li>
              Recording of Phone Conversations. ONEGOLD and its agents may record phone conversations between
              ONEGOLD and you. You expressly consent to the recording of such phone conversations.
            </li>
            <li>
              Absence of Waivers. A delay or failure by ONEGOLD to take action with respect to any non-compliance
              by you with your obligations to ONEGOLD or to insist upon strict adherence the User Agreement does not
              affect the ability of ONEGOLD with respect to any other non-compliance by you and does not waive or
              limit ONEGOLD&rsquo;s right thereafter to insist upon strict adherence to that or any other term,
              whether of a similar or dissimilar nature.
            </li>
            <li>
              Pricing or Typographical Errors. ONEGOLD strives to provide accurate product and pricing information
              to you. However, pricing or typographical errors may occur. In the event that an item is listed at an
              incorrect list price or with incorrect information, ONEGOLD may, at its sole discretion, refuse or
              cancel any Order placed by, or sent to, you for that item. ONEGOLD may either contact you for
              instructions or cancel your Order and notify you of such cancellation. Prices and availability are
              subject to change without notice. If a refund is provided or there is any delay in sending you your
              payment, as the case may be, you waive any right to any claim or actual damages of any kind or nature
              whatsoever.
            </li>
            <li>
              ONEGOLD takes security very seriously. Our security measures are intended to minimize the loss, misuse
              and alteration of all information under ONEGOLD&rsquo;s control, but cannot, of course, assure such
              result. ONEGOLD&rsquo;s system is based on the SSL (Secure Socket Layer) encryption standard. If you
              are using an SSL-compliant browser such as Microsoft Internet Explorer, Google Chrome, Mozilla Firefox
              or Apple Safari, you will generally be able to conduct fully-protected transactions that encrypt all of
              your personal information, including credit card number, name and address, so it cannot be read as the
              information travels from you to ONEGOLD. Furthermore, all of the customer data ONEGOLD is subject to
              privacy protections. See our Privacy Policy for additional information.
            </li>
            <li>
              The User Agreement is intended to be enforceable to the fullest extent permitted by applicable law. If
              any term of the User Agreement is held to be unenforceable for any reason, such unenforceability shall
              not affect the other terms of the User Agreement, and the term that would otherwise be unenforceable
              shall be enforced to the fullest extent that it would be enforceable.
            </li>
            <li>
              ONEGOLD may amend the User Agreement at any time and from time to time by posting the amended terms on
              the Website and such amendments shall become effective immediately.
            </li>
            <li>
              Entire Agreement. The User Agreement, the Privacy Policy and confirmations of Purchases or Sales
              thereunder set forth the entire understanding between ONEGOLD and you with respect to the subject
              matter of our transactions.
            </li>
            <li>
              <strong>User Content and Conduct</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  You may be invited to post User Content. You understand that all User Content, whether publicly
                  posted on a forum or privately transmitted to ONEGOLD or other person, is your sole
                  responsibility. Though the Website is designed to be a safe place to share User Content, ONEGOLD
                  cannot guaranty that a user will not misuse the User Content. If you have any User Content that
                  you want to keep confidential or you do not want others to use, do not post it to the Website.
                  Under no circumstances will ONEGOLD be liable in any way for any User Content or the use or
                  misuse thereof, including, without limitation, any errors or omissions in any User Content, or for
                  any loss or damage of any kind incurred as a result of the use of any User Content posted, emailed
                  or otherwise transmitted via the Website.
                </li>
                <li>
                  By posting any User Content at the Website, you hereby grant ONEGOLD and its designees a
                  royalty-free, fully paid-up, perpetual, irrevocable, non-exclusive and fully sublicensable right
                  and license to use, reproduce, modify, adapt, publish, translate, combine with other works, create
                  derivative works from, distribute, perform, edit and display such User Content (in whole or part),
                  throughout the world in any form, media, or technology now known or later developed. You
                  specifically waive any &ldquo;moral rights&rdquo; in and to the User Content. Such license
                  includes, without limitation, any copyrights and other intellectual property rights in and to your
                  User Content. You represent and warrant that: (a) you own the User Content posted by you or
                  otherwise have the right to grant the license granted hereby; and (b) the posting of your User
                  Content at the Website does not violate the privacy rights, publicity rights, copyrights, contract
                  rights or any other rights of any person. You agree to pay for all royalties, fees, and any other
                  monies owing any person by reason of any User Content you post at the Website. You acknowledge and
                  agree that ONEGOLD may preserve User Content and may also disclose User Content if required to do
                  so by law or in the good faith belief that such preservation or disclosure is reasonably necessary
                  to: (a) comply with legal process; (b) enforce this User Agreement; (c) respond to claim(s) or
                  assertion(s) that any User Content violates the rights of third-parties; or (d) protect the
                  rights, property, or personal safety of ONEGOLD, its users and the public. You understand that the
                  technical processing and transmission of the Website, including, without limitation, your User
                  Content, may involve transmissions over various networks and changes to conform and adapt to
                  technical requirements of connecting networks or devices.
                </li>
                <li>
                  You agree that you will not:
                  <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                    <li>
                      upload, post, email or otherwise transmit any User Content that is unlawful, harmful,
                      threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of
                      another&rsquo;s privacy, hateful, or racially, ethnically or otherwise objectionable;
                    </li>
                    <li>harm minors in any way;</li>
                    <li>
                      impersonate any person or entity, including, but not limited to a representative of ONEGOLD,
                      or falsely state or otherwise misrepresent your affiliation with a person or entity;
                    </li>
                    <li>
                      forge headers or otherwise manipulate identifiers in order to disguise the origin of any User
                      Content;
                    </li>
                    <li>
                      upload, post, email or otherwise transmit any User Content that you do not have a right to
                      transmit under any law or under contractual, fiduciary or other relationships (such as inside
                      information, proprietary and confidential information learned or disclosed as part of
                      employment relationships or under nondisclosure agreements);
                    </li>
                    <li>
                      upload, post, email or otherwise transmit any User Content that infringes any patent,
                      trademark, trade secret, copyright or other proprietary rights of any person;
                    </li>
                    <li>
                      upload, post, email or otherwise transmit any unsolicited or unauthorized advertising,
                      promotional materials, &ldquo;junk mail,&rdquo; &ldquo;spam,&rdquo; &ldquo;chain
                      letters,&rdquo; &ldquo;pyramid schemes,&rdquo; or any other form of solicitation, except in
                      any areas that are designated for such purpose;
                    </li>
                    <li>
                      upload, post, email or otherwise transmit any material that contains software viruses or any
                      other computer code, files or programs designed to interrupt, emulate, destroy or limit the
                      functionality of any computer software or hardware or telecommunications equipment;
                    </li>
                    <li>
                      disrupt the normal flow of dialogue, cause a screen to &ldquo;scroll&rdquo; faster than other
                      users of the Website are able to type, or otherwise act in a manner that negatively affects
                      other users&rsquo; ability to engage in real-time exchanges;
                    </li>
                    <li>
                      interfere with or disrupt the Website, ONEGOLD Mobile App or servers or networks connected to
                      the Website or ONEGOLD Mobile App, or disobey any requirements, procedures, policies or
                      regulations of networks connected to the Website or the ONEGOLD Mobile App;
                    </li>
                    <li>&ldquo;stalk&rdquo; or otherwise harass another; or</li>
                    <li>collect or store personal data about other users.</li>
                  </ul>
                </li>
                <li>
                  You understand that by using the Website and ONEGOLD Mobile App, you may be exposed to User
                  Content that is offensive, indecent or objectionable. ONEGOLD does not endorse or have control
                  over User Content. User Content is not reviewed by ONEGOLD prior to posting and does not reflect
                  the opinions or policies of ONEGOLD. ONEGOLD makes no representations or warranties, express or
                  implied, as to User Content or the accuracy and reliability of User Content or any other material
                  or information that you may access through the Website or the ONEGOLD Mobile App. ONEGOLD assumes
                  no responsibility for monitoring the Website or the ONEGOLD Mobile App for inappropriate
                  submissions or conduct. If at any time ONEGOLD chooses, in its sole discretion, to monitor the
                  Website or the ONEGOLD Mobile App, OneGold nonetheless assumes no responsibility for User
                  Content, has no obligation to modify or remove any inappropriate User Content, and has no
                  responsibility for the conduct of users submitting any such User Content. Notwithstanding the
                  foregoing, ONEGOLD may remove any User Content that violates this User Agreement or is otherwise
                  objectionable, in ONEGOLD&rsquo;s sole discretion. You agree that you must evaluate, and bear all
                  risks associated with, the use of any User Content, including, without limitation, any reliance on
                  the accuracy, completeness, or usefulness of such User Content. In this regard, you acknowledge
                  that you may not rely on any User Content.
                </li>
                <li>
                  You are solely responsible for your interactions with other users. ONEGOLD reserves the right, but
                  has no obligation, to monitor disputes between you and other users and to terminate your Website
                  or ONEGOLD Mobile App access if ONEGOLD determines, in its sole discretion, that doing so is
                  prudent.
                </li>
              </ul>
            </li>
            <li>
              <strong>Other Terms of Use; Intellectual Property</strong>
              <ul className="list-disc pl-[40px] mt-[3px] space-y-[3px]">
                <li>
                  ONEGOLD may revise and update these Terms of Use at any time and without notice. You should review
                  the Terms of Use posted on the Website and ONEGOLD Mobile App periodically. Your continued access
                  or use of the Website or the ONEGOLD Mobile App after any such change is posted will constitute
                  your acceptance of such change.
                </li>
                <li>
                  The Website, the ONEGOLD Mobile App and their contents, including, without limitation, photography
                  and other ONEGOLD assets (the &ldquo;Content&rdquo;), are intended for customers of ONEGOLD. You
                  may not use the Website, the ONEGOLD Mobile App or the Content for any purpose not related to
                  your business with ONEGOLD. Without limiting the generality of the forgoing, you are specifically
                  prohibited from: (a) downloading, copying, or re-transmitting any part or all of the Website, the
                  ONEGOLD Mobile App or the Content without, or in violation of, a written license or agreement
                  with ONEGOLD; (b) using any data mining, robots or similar data gathering or extraction methods;
                  (c) manipulating or otherwise displaying the Website, the ONEGOLD Mobile App or the Content by
                  using framing or similar navigational technology; (d) registering, subscribing, unsubscribing, or
                  attempting to register, subscribe, or unsubscribe any party for any ONEGOLD product or service if
                  you are not expressly authorized by such party to do so; and (e) using the Website, the ONEGOLD
                  Mobile App or the Content other than for its intended purpose, as determined solely in
                  ONEGOLD&rsquo;s discretion, including without limitation, to defame, abuse, harass, stalk,
                  threaten or otherwise violate the legal rights (such as rights of privacy) of others, and/or to
                  publish, post, distribute or disseminate any defamatory, infringing, obscene, pornographic,
                  sexual, indecent or unlawful material or information.
                </li>
                <li>
                  You may not interfere with the security of, or otherwise abuse, the Website, the ONEGOLD Mobile
                  App or any system resources, services or networks connected to, or accessible through, the Website
                  or the ONEGOLD Mobile App.
                </li>
                <li>
                  You may only use the Website and the ONEGOLD Mobile App for lawful purposes.
                </li>
                <li>
                  All materials, including, without limitation, the organization and presentation of such materials
                  on the Website and the ONEGOLD Mobile App, and including, without limitation, wholly owned brand
                  assets such as photography (&ldquo;Materials&rdquo;), are the property of ONEGOLD and its
                  licensors and may be protected by intellectual property laws, including, without limitation, laws
                  relating to copyrights, trademarks, trade names, internet domain names and other similar rights.
                  Unless you have entered into a separate agreement with ONEGOLD, any other use of these Materials
                  without ONEGOLD&rsquo;s written permission is prohibited.
                </li>
                <li>
                  ONEGOLD&reg; and any other product or service name or slogan contained on the Website and/or the
                  ONEGOLD Mobile App are the property of ONEGOLD and its licensors and may not be copied, imitated
                  or used, in whole or in part, without the prior written permission ONEGOLD or the applicable
                  trademark holder. You may not use any &ldquo;hidden text&rdquo; utilizing &ldquo;ONEGOLD&rdquo;
                  or any other name, trademark or product or service name of ONEGOLD without prior written
                  permission. In addition, the look and feel of the Website and the ONEGOLD Mobile App, including,
                  without limitation, all page headers, custom graphics, button icons and scripts, are the service
                  mark, trademark and/or trade dress of ONEGOLD and may not be copied, imitated or used, in whole
                  or in part, without our prior written permission. All other trademarks, registered trademarks,
                  product names and company names or logos mentioned on the Website or the ONEGOLD Mobile App are
                  the property of their respective owners. Reference to any products, services, processes or other
                  information, by trade name, trademark, manufacturer, supplier or otherwise does not constitute or
                  imply endorsement, sponsorship or recommendation thereof.
                </li>
              </ul>
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}
