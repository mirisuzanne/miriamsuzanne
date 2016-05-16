public: yes
location: 'contact'
hide_contact: True


Start a conversation
====================

Share your thoughts,
propose a collaboration,
tell me about your explorations of art *&* code,
or your queer vision for the world,
invite me to speak,
or just argle some bargle.
I want to hear from you!

|contact-form|

.. |contact-form| raw:: html

  <form action="https://formspree.io/miriam@miriamsuzanne.com" method="POST">
    <input type="hidden" name="_next" value="http://miriamsuzanne.com/thanks/" />
    <input type="text" name="_gotcha" style="display:none" />

    <label for="contact-name" data-form-field="contact-name">
      <span class="form-label">Name</span>
      <input type="text" id="contact-name" name="name" placeholder="Beyoncé">
    </label>

    <label for="contact-email" data-form-field="contact-email">
      <span class="form-label">Email</span>
      <input type="email" id="contact-email" name="_replyto" placeholder="beyonce@example.com">
    </label>

    <label for="contact-message" data-form-field="contact-message">
      <span class="form-label">Message</span>
      <textarea name="message" id="contact-message" placeholder="Dear Mia..."></textarea>
    </label>

    <div class="form-actions">
      <input type="submit" class="btn" value="Send!">
    </div>
  </form>
