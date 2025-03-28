document.addEventListener("DOMContentLoaded", () => {
  const templatesContainer = document.getElementById("templatesContainer")
  const shareLink = "https://mayankwadhera.com"

  // Message templates
  const templates = [
    {
      id: 1,
      content: `1️⃣ Excited to Read & Learn 📖🔥
🚀 Won "Money Mindset for Founders" at #StartupMahakumbh! Super excited to dive into this book by CA Mayank Wadhera, as it covers essential topics every startup founder must master—how to Make, Manage & Multiply Money.

💡 Money management is one of the biggest challenges for founders, and I can't wait to explore practical insights from this book!

📚 If you're an entrepreneur, this is something you don't want to miss!

#MoneyMindsetForFounders #StartupFinance #FounderGrowth #EntrepreneurWisdom #StartupSuccess`,
    },
    {
      id: 2,
      content: `2️⃣ Real-World Insights for Founders 🚀📊
Just got my hands on "Money Mindset for Founders" at #StartupMahakumbh! 📖

💰 Managing money is as important as making it, and this book focuses on real-world financial strategies for founders. Excited to learn how to avoid common startup financial pitfalls and scale smartly!

🔍 Looking forward to applying these insights to my startup journey.

#FounderFinance #MoneyMindsetForFounders #StartupGrowth #EntrepreneurPlaybook #SmartMoneyMoves`,
    },
    {
      id: 3,
      content: `3️⃣ A Must-Read for Every Founder 📖💡
📚 Just received "Money Mindset for Founders" by CA Mayank Wadhera at #StartupMahakumbh!

💼 This book isn't about financial theory—it's a playbook for founders to Make, Manage & Multiply Money. Every startup journey comes with financial challenges, and this guide helps navigate them wisely.

✅ Can't wait to dive in and gain practical insights!

#StartupWisdom #FounderPlaybook #MoneyMindsetForFounders #EntrepreneurialJourney #SmartStartups`,
    },
    {
      id: 4,
      content: `4️⃣ Avoiding Financial Mistakes in Startups 🔥💰
🙌 Won this book at #StartupMahakumbh, and I'm super excited to read it!

💡 "Money Mindset for Founders" by CA Mayank Wadhera breaks down how founders can develop a strong financial mindset and avoid the most common money mistakes in startups.

💰 Finance is a major factor in a startup's success or failure. Can't wait to learn and apply these lessons to make better financial decisions!

#FinancialFreedom #MoneyMindsetForFounders #StartupJourney #FounderWisdom #EntrepreneurTips`,
    },
    {
      id: 5,
      content: `5️⃣ The Ultimate Guide to Money in Startups 🚀📊
🔥 Got my copy of "Money Mindset for Founders" at #StartupMahakumbh!

💡 Founders often focus on raising funds, but managing money smartly is the real key to startup success. This book provides a practical approach to handling finances as an entrepreneur.

📖 Excited to go through it and gain insights on financial discipline & smart money moves for my startup journey!

#StartupMahakumbh #FounderMindset #MoneyMindsetForFounders #SmartFinance #EntrepreneurSuccess`,
    },
  ]

  // Render templates
  templates.forEach((template) => {
    const templateCard = document.createElement("div")
    templateCard.className = "template-card"
    templateCard.innerHTML = `
            <div class="template-content">${template.content}</div>
            <div class="template-actions">
                <button class="copy-btn" data-id="${template.id}">
                    <i class="fas fa-copy"></i> Copy Message
                </button>
                <div class="social-buttons">
                    <button class="social-btn linkedin" data-id="${template.id}">
                        <i class="fab fa-linkedin"></i> LinkedIn
                        <span class="linkedin-tooltip">LinkedIn doesn't support prefilled messages</span>
                    </button>
                    <button class="social-btn facebook" data-id="${template.id}">
                        <i class="fab fa-facebook"></i> Facebook
                    </button>
                    <button class="social-btn twitter" data-id="${template.id}">
                        <i class="fab fa-twitter"></i> Twitter
                    </button>
                    <button class="social-btn whatsapp" data-id="${template.id}">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                    <button class="social-btn instagram" data-id="${template.id}">
                        <i class="fab fa-instagram"></i> Instagram
                    </button>
                </div>
            </div>
        `

    templatesContainer.appendChild(templateCard)
  })

  // Handle copy button clicks
  document.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const templateId = this.getAttribute("data-id")
      const template = templates.find((t) => t.id == templateId)

      if (template) {
        copyToClipboard(template.content)

        if (typeof Swal !== "undefined") {
          Swal.fire({
            title: "Copied!",
            text: "Message copied to clipboard",
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          })
        } else {
          alert("Message copied to clipboard!") // Fallback if Swal is not available
        }
      }
    })
  })

  // Handle social button clicks
  document.querySelectorAll(".social-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const templateId = this.getAttribute("data-id")
      const template = templates.find((t) => t.id == templateId)
      const socialPlatform = this.classList[1] // linkedin, facebook, etc.

      if (template) {
        shareOnSocialMedia(socialPlatform, template.content, shareLink)
      }
    })
  })

  // Function to copy text to clipboard
  function copyToClipboard(text) {
    const textarea = document.createElement("textarea")
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    document.body.removeChild(textarea)
  }

  // Function to share on social media
  function shareOnSocialMedia(platform, text, link) {
    let shareUrl = ""

    switch (platform) {
      case "linkedin":
        // LinkedIn doesn't support prefilled text, only URL
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`
        break

      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}&quote=${encodeURIComponent(text)}`
        break

      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`
        break

      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + "\n\n" + link)}`
        break

      case "instagram":
        // Instagram doesn't have a direct sharing API
        // Copy the text to clipboard and show instructions
        copyToClipboard(text)

        if (typeof Swal !== "undefined") {
          Swal.fire({
            title: "Instagram Sharing",
            html: `
                            <p>Instagram doesn't support direct sharing from websites.</p>
                            <p>The message has been copied to your clipboard.</p>
                            <p>Please follow these steps:</p>
                            <ol style="text-align: left; margin-top: 10px;">
                                <li>Open Instagram app</li>
                                <li>Create a new post or story</li>
                                <li>Paste the copied text</li>
                                <li>Add a photo of the book</li>
                                <li>Post to your feed or story</li>
                            </ol>
                        `,
            icon: "info",
            confirmButtonColor: "#f39c12",
          })
        } else {
          alert("Instagram sharing: Message copied to clipboard. Please share manually.")
        }
        return
    }

    // Open share URL in a new window
    window.open(shareUrl, "_blank", "width=600,height=600")
  }
})

