// Создать класс options
class Options {
    
    // Он должен содержать свойства: height, width, bg, fontSize, textAlign
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width; 
        this.bg = bg; 
        this.fontSize = fontSize; 
        this.textAlign = textAlign;
    }
    
    // Он должен содержать метод, создающий новый div на странице, 
    // записывающий в него любой текст и при помощи cssText изменять свой стиль из переданных параметров
    createDiv(text) {
        let div = document.createElement('div');
        div.textContent = text;
        div.style.cssText = `color: red; 
            background-color: ${this.bg}; 
            width: ${this.width}px; 
            height: ${this.height}px; 
            font-Size: ${this.fontSize}px; 
            text-align: ${this.textAlign};`;
        document.body.append(div);
     }
    
}

let arg = [50, 400, "yellow", 40, "center"];
let opt = new Options(...arg);
opt.createDiv("Наш текст");