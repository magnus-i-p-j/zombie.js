goog.provide("z.rulebook.improvements");

//IActionSpecification
//category: improvement || ?
//title:string
//description:string
//prerequisites:
//  entity: string (the entities that can perform this action)
//  conditions: the conditions that must be fulfilled in order to be able to execute the action.
//resources:
//labour:int

z.rulebook.improvements =  [
    {
      category: 'improvement',
      title:'A spiked pit.',
      description:'A spiked pit. Good for tripping up zombies and nailing them down.',
      prerequisites:{
        entity : 'Tile',
        conditions: { terrain :'grass' }
      },
      resources:{},
      labour:3
    }
  ];
