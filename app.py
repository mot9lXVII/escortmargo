from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/contacts')
def contacts():
    return render_template('contacts.html')

@app.route('/developers')
def developers():
    return render_template('developers.html')

@app.route('/settings')
def settings():
    return render_template('settings.html')

@app.route('/reviews')
def reviews():
    return render_template('reviews.html')  # Новый маршрут для отзывов

if __name__ == '__main__':
    app.run(debug=True)
