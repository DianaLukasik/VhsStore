import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let tapes = [
      {
        id: 1,
        title: 'Titanic',
        director: 'James Cameron',
        genre: 'Drama',
        stars: 'Leonardo DiCaprio, Kate Winslet, Billy Zane, Bill Paxton, Gloria Stuart, Frances Fisher, Bernard Hill',
        year: 1997,
        time: 113,
        description: 'Titanic is the ginormous elephant in the room, or rather, the entire 1990s. Film nerds are reluctant to put it on a "Best Of" list, but at the same time, you\'d look like a pretentious asshole if you left it out entirely. But let\'s be honest, Titanic deserves a spot here, at the very least for its sheer magnitude. The impact of the film was overwhelming; you couldn\'t go a week without one of your peers mentioning they had seen it in theaters again, and cried just the same.',
        rented: false,
        image: 'Titanic.jpg'
      },
      {
        id: 2,
        title: 'Godzilla',
        director: 'Roland Emmerich',
        genre: 'Action',
        stars: 'Matthew Broderick, Jean Reno, Maria Pitillo',
        year: 1998,
        time: 113,
        description: 'A giant, reptilian monster surfaces, leaving destruction in its wake. To stop the monster (and its babies), an earthworm scientist, his reporter ex-girlfriend, and other unlikely tapes team up to save their city.',
        rented: false,
        image: 'Godzilla.jpg'
      },
      {
        id: 3,
        title: 'Home Alone',
        director: 'Chris Columbus',
        genre: 'Comedy',
        stars: 'Macaulay Culkin, Joe Pesci, Daniel Stern, Catherine O\'Hara, John Heard',
        year: 1990,
        time: 114,
        description: 'Kevin McAllister taught us how to dream, scheme, and turn our toys in weapons. The puny borderline-albino boy whose parents have too many other kids to keep track of to realize he is not on the plane to their vacation destination taught us that instead of not talking to creepy strangers, it\'s best to kick their ass.',
        rented: false,
        image: 'HomeAlone.jpg'
      },
      {
        id: 4,
        title: 'GoldenEye',
        director: 'Martin Campbell',
        genre: 'Spy',
        stars: 'Pierce Brosnan, Izabella Scorupco, Famke Janssen',
        year: 1995,
        time: 131,
        description: 'The seventeenth spy film in the James Bond series, and the first to star Pierce Brosnan as the fictional MI6 officer James Bond. The film was directed by Martin Campbell and is the first in the series not to take story elements from the works of novelist Ian Fleming.[1] The story was conceived and written by Michael France, with later collaboration by other writers. In the film, Bond fights to prevent an ex-MI6 agent, gone rogue, from using a satellite against London to cause a global financial meltdown',
        rented: false,
        image: 'GoldenEye.jpg'
      },
            {
        id: 5,
        title: 'The Blair Witch Project',
        director: '	Eduardo Sánchez',
        genre: 'Horror',
        stars: 'Heather Donahue, Joshua Leonard, Michael C. Williams',
        year: 1999,
        time: 81,
        description: 'The Blair Witch Project is a 1999 American psychological horror film written, directed and edited by Daniel Myrick and Eduardo Sánchez. The film tells the fictional story of three student filmmakers (Heather Donahue, Michael C. Williams and Joshua Leonard) who hike in the Black Hills near Burkittsville, Maryland in 1994 to film a documentary about a local legend known as the Blair Witch. The three disappear, but their video and sound equipment (along with most of the footage they shot) is discovered a year later; the "recovered footage" is the film the viewer is watching.',
        rented: false,
        image: 'BlairWitchProject.jpg'
      },
                  {
        id: 6,
        title: 'Natural Born Killers',
        director: 'Oliver Stone',
        genre: 'Crime',
        stars: 'Woody Harrelson, Juliette Lewis, Robert Downey, Jr.',
        year: 1994,
        time: 119,
        description: 'Natural Born Killers is a 1994 American satirical crime film directed by Oliver Stone and starring Woody Harrelson, Juliette Lewis, Robert Downey Jr., Tom Sizemore, and Tommy Lee Jones. The film was released in the United States on August 26, 1994. The film tells the story of two victims of traumatic childhoods who became lovers and mass murderers, and are irresponsibly glorified by the mass media.',
        rented: false,
        image: 'NaturalBornKillers.jpg'
      },
                        {
        id: 7,
        title: 'The Lion King',
        director: 'Rob Minkoff',
        genre: 'Animated',
        stars: 'Matthew Broderick, James Earl Jones, Jeremy Irons',
        year: 1994,
        time: 89,
        description: 'American animated epic musical film, produced by Walt Disney Feature Animation and released by Walt Disney Pictures. It is the 32nd Disney animated feature film. The story takes place in a kingdom of lions in Africa and was influenced by William Shakespeare Hamlet. The film was produced during a period known as the Disney Renaissance. The Lion King was directed by Roger Allers and Rob Minkoff, produced by Don Hahn, and has a screenplay credited to Irene Mecchi, Jonathan Roberts, and Linda Woolverton. Its original songs were written by composer Elton John and lyricist Tim Rice, and original scores were written by Hans Zimmer.',
        rented: false,
        image: 'TheLionKing.jpg'
      },
                        {
        id: 8,
        title: 'Trainspotting',
        director: 'Danny Boyle',
        genre: 'Drama',
        stars: 'Ewan McGregor, Ewen Bremner, Jonny Lee Miller',
        year: 1996,
        time: 90,
        description: 'British black comedy drama film directed by Danny Boyle, and starring Ewan McGregor, Ewen Bremner, Jonny Lee Miller, Kevin McKidd, Robert Carlyle and Kelly MacDonald in her acting debut. Based on the novel of the same name by Irvine Welsh, the film was released in the United Kingdom on 23 February 1996.',
        rented: false,
        image: 'Trainspotting.jpg'
      },
                        {
        id: 9,
        title: 'Edward Scissorhands',
        director: 'Tim Burton',
        genre: 'Drama',
        stars: 'Johnny Depp, Winona Ryder, Dianne Wiest, Anthony Michael Hall',
        year: 1990,
        time: 105,
        description: 'American romantic dark fantasy film directed by Tim Burton, produced by Denise Di Novi and Tim Burton, and written by Caroline Thompson from a story by Tim Burton and Caroline Thompson, starring Johnny Depp as an artificial man named Edward, an unfinished creation who has scissor blades instead of hands. The young man is taken in by a suburban family and falls in love with their teenage daughter Kim (Winona Ryder). Additional roles were played by Dianne Wiest, Anthony Michael Hall, Kathy Baker, Vincent Price and Alan Arkin.',
        rented: false,
        image: 'EdwardScissorhands.jpg'
      },
                        {
        id: 10,
        title: 'Matrix',
        director: '	The Wachowski Brothers',
        genre: 'Action',
        stars: 'Keanu Reeves,Laurence Fishburne,Carrie-Anne Moss,Hugo Weaving',
        year: 1999,
        time: 136,
        description: 'The Matrix is a 1999 science fiction film written and directed by The Wachowskis, starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano. It depicts a dystopian future in which reality as perceived by most humans is actually a simulated reality called "the Matrix", created by sentient machines to subdue the human population, while their bodies\' heat and electrical activity are used as an energy source. Computer programmer "Neo" learns this truth and is drawn into a rebellion against the machines, which involves other people who have been freed from the "dream world."',
        rented: false,
        image: 'Matrix.jpg'
      },
      
    ];
    return { tapes };
  }
}
