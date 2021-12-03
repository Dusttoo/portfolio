from flask import Blueprint, jsonify, request
from app.forms.contact_form import ContactForm
import app



contact_routes = Blueprint('contacts', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@contact_routes.route('', methods=['POST'])
def contact():
  form = ContactForm()
  print(form.data)
  print(form.errors)
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
      msg = app.Message(form.subject.data, sender=form.email.data,
                    recipients=['dusty.mumphrey@gmail.com'])
      msg.body = """
      From: %s <%s>
      %s
      """ % (form.name.data, form.email.data, form.message.data)
      app.mail.send(msg)

      return {'success': 'true'}
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401
  
