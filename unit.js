class Unit {
    constructor(type, health, distance) {
        this.type = type;
        this.health = this.maxHealth = health;
        this.distance = this.maxDistance = distance;
        let a = this.health;

    }
    
    showUnit() {
        let div = document.createElement('div');
            div.className = 'unit';
        let divHealth = document.createElement('div');
                divHealth.className = 'health';
                 divHealth.style.width = `${this.health}%`;
        let divStamina = document.createElement('div');
            divStamina.className = 'stamina';
                divStamina.style.width = `${this.distance}%`;
        let p = document.createElement('p');
            let divImg = document.createElement('div');
                    divImg.className = 'img';
        let img = document.createElement('img');
            img.className = 'img';
        const pictures = {
            Warrior_1:  'pictures/Warrior_1.jpg',
            Warrior_2: 'pictures/Warrior_2.jpg',
            Warrior_3: 'pictures/Warrior_3.jpg',
        }
        img.src = `${pictures[this.type]}`;
        

     document.body.append(div);
      div.appendChild(divHealth);
        div.appendChild(divStamina);
          div.appendChild(p);
          p.innerHTML = `${this.type}`;
        div.appendChild(divImg);
      divImg.appendChild(img);

    }
    
    isReadyToMove() {
        return this.distance > 0;
    }

    isReadyToFight() {
        return this.health > 0;
    }
    
    restore() {
        this.health = this.maxHealth;
        this.distance = this.maxDistance;
    }

    clone() {
        return new Unit(this.type, this.maxHealth, this.maxDistance);
    }
};


