export const towerBuilder = (nFloors: number): string[] => {    
    let tower = [];
    for(let i = 0; i < nFloors; i++) {
      let spaces = ' '.repeat(nFloors - i - 1);
      let blocks = '*'.repeat(2 * i + 1);
      tower.push(spaces + blocks + spaces)
    }
    return tower;
  }

export const towerBuilderV2 = (nFloors: number): string[] => {
    return Array.from({ length: nFloors }, (_, index) => {
        const spaces = " ".repeat(nFloors - 1 - index);
        return `${spaces}${"*".repeat(index * 2 + 1)}${spaces}`;
    });
};

export const towerBuilderv1 = (nFloors: number): string[] => {    
    let tower = [];
    for(let i = 0; i < nFloors; i++) {
      let floor = '';
      
      for(let j = 0; j < nFloors - i - 1; j++) {
        floor += ' ';
      }
      
      for(let k = 0; k < 2 * i + 1; k++) {
        floor += '*';
      }
      
      for(let l = 0; l < nFloors - i - 1; l++) {
        floor += ' ';
      }      
      tower.push(floor);
    }
    return tower;
  }