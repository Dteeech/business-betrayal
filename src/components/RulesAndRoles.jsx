import React from 'react';
import '../rulesAndRoles.css';
import image1 from '../assets/Image-rules-1.png';
import image2 from '../assets/Image-rules-2.png';
import image3 from '../assets/Image-rules-3.png';
import image4 from '../assets/Image-rules-4.png';
import image5 from '../assets/Image-rules-5.png';
import image6 from '../assets/Image-rules-6.png';
import image7 from '../assets/Image-rules-7.png';
import image8 from '../assets/Image-rules-8.png';
import image9 from '../assets/Image-rules-9.png';
import image10 from '../assets/Image-rules-10.png';
import competitor from '../assets/competitor.png';

const rolesData = [
    {
        title: 'Colleague',
        text: 'The colleague does not have a specific role.',
        image: image1,
    },
    {
        title: 'Communication Officer',
        text: "Every morning, if the communication officer is positioned to the right or left of a Competitor, their LinkedIn will ring (The game master will trigger the alert).",
        image: image2,
    },
    {
        title: 'Dedicated Colleague',
        text: 'Can protect a colleague every night. Cannot protect the same colleague two nights in a row.',
        image: image3,
    },
    {
        title: 'Human Resources Manager',
        text: "The HR manager can see a colleague's card per turn during the night.",
        image: image4,
    },
    {
        title: 'Manipulator',
        text: 'Every night, after waking up with the competitors, they can decide to infect a victim. The victim then becomes infected and part of the company\'s competitors. They can only use their power once during the game.',
        image: image5,
    },
    {
        title: 'Trainee',
        text: "At the beginning of the game, the trainee chooses their mentor. This player is unaware that they are the intern's mentor. If, during the game, the mentor dies, then the intern joins the competitors.",
        image: image6,
    },
    {
        title: 'Competitor',
        text: 'The competitor\'s goal is to halt the company\'s activities and eliminate each colleague',
        image: competitor,
    },
    {
        title: 'Artistic Director',
        text: 'The AD has the power to revive or kill once for each power, only once during the game. They can save themselves.',
        image: image7,
    },
    {
        title: 'Secretary',
        text: 'The Secretary can spy on Competitors when their turn comes. If she gets noticed spying, the Competitors won\'t hesitate to eliminate her.',
        image: image8,
    },
    {
        title: 'The freelancer',
        text: 'The Freelancer is a solo role who must win along with their collaborator. During the first night, they choose a player who becomes their collaborator in their startup project. If one of them dies, it signifies the startup\'s bankruptcy, and the second collaborator is eliminated at the same time.',
        image: image9,
    },
    {
        title: 'The Hacker',
        text: 'Its purpose is to trade or steal ' +
            'other players skill cards. He can only use his power once',
        image: image10,
    },

];

const RulesAndRoles = () => {
    return (
        <div>
            <div className='RulesAndRoles_container'>
                <h2 className='titles'> Roles</h2>
                <div className='Roles_container'>
                    {rolesData.map((role, index) => (
                        <div className='textAndImage' key={index}>
                            <img src={role.image} alt={`Image ${index + 1}`} style={{ width: '80px', height: 'auto' }} />
                            <h3>{role.title}</h3>
                            <p>{role.text}</p>
                        </div>
                    ))}
                </div>
                <div className='Rules_container'>
                    <h2 className='titles'> Rules</h2>
                    <div>
                        <h3>Setup</h3>
                        <p>
                            I - Players designate or randomly select a game master who does not play but directs the game. For the first few games, someone well-versed in the game, someone who has deciphered the rules, or a skillful group leader will be best suited to create the best atmosphere. (For more advice for the game master, go on our website).

                            II - The game master hands out 1 hidden character card to each player. Each player discreetly looks at their character and then places their card face down in front of them.

                            III - The game master puts the company to sleep. The game master says: "It's nighttime, the entire company is falling asleep, players close their eyes." All players lower their heads and close their eyes. Then, based on the chosen characters in the game, the game master calls out the different characters.
                        </p>
                    </div>
                    <div>
                        <h3>Preparation round</h3>
                        <p>
                            I - The game master calls the Hacker. The game master says, "The Hacker wakes up!" The player with the Hacker card opens their eyes and discreetly looks at a player card, then potentially changes characters. The game master says, "The Hacker goes back to sleep." The Hacker closes their eyes.

                            II - The game master calls the Trainee. The game master says, "The Intern wakes up!" The Intern opens their eyes and points to their Supervisor. The game master notes and says, "The Intern goes back to sleep." The Intern closes their eyes.

                            III - The game master calls the Freelancer. The game master says, "The Freelancer wakes up." The game master asks if they want to make a startup proposal to one of the players. The Freelancer indicates whom they want to introduce into their startup project. The game master touches the targeted player's head, they wake up, see who their collaborator is, and go back to sleep. The game master says, "The Freelancer goes back to sleep." The Freelancer closes their eyes.
                        </p>
                    </div>
                    <div>
                        <h3>Regular round</h3>
                        <p>
                            It varies based on the characters in the game and their survival in the game, but the characters are always called in the following order:

                            I – The game master calls the Human Resources Manager. The game master says, “The HR Manager wakes up and designates a player whose true identity she wants to know!” The game master shows the HR Manager the hidden face of the card of the player the HR Manager has designated. The game master says, “The HR Manager goes back to sleep.” The HR Manager closes her eyes.

                            II – The game master calls the Competitors. The game master says, “The Competitors wake up, recognize each other, and designate a new victim!!!” The Competitors (and only them) raise their heads, open their eyes, silently consult, and designate a victim. During this round, the Secretary can spy on the Competitors by discreetly opening her eyes slightly. She is not obliged to do so and is not allowed to open her eyes wide. If caught, the Competitors have the right to change their minds, and she dies instead of the potentially chosen victim. The game master says, “The satisfied Competitors go back to sleep and dream of delicious future victims!” The Competitors close their eyes.

                            III – The game master calls the Artistic Director. The game master says, “The Artistic Director wakes up, and the game master shows her the victim chosen by the Competitors. Will she use her healing or poisoning potion?” The game master shows the Artistic Director the victim of the Werewolves. The Artistic Director is not obliged to use her power on a specific turn. If she uses a potion, she must indicate to the game master her target with a thumbs-up for healing or thumbs-down for poisoning. The game master will reveal its possible effect the following morning.

                            IV – The game master calls the Dedicated Colleague. The game master says, “The Dedicated Colleague wakes up, and the game master asks whom they want to protect tonight. (They cannot protect the same person two nights in a row) The game master says, “The Dedicated Colleague goes back to sleep.” The Dedicated Colleague closes their eyes.
                        </p>
                    </div>
                    <div>
                        <p>
                            V – The company is open.
                            The game master says, "It's daytime, colleagues enter the company!"
                            Step 1: The youngest starts, then it moves clockwise.
                            The player flips an event card and then answers the question.
                            If he has the right answer, move forward one round by turning over a round card.
                            If he doesn't have the correct answer, do not advance by one round.
                            Step 2: The company debates potential suspects.
                            The game master moderates and relaunches the debates.
                            A suspicious noise during the night, a peculiar behavior compared to another player, or a consistently identical voting pattern of certain colleagues: these are examples of clues that may lead to suspecting certain players of being Werewolves.
                            Everyone has the right to pretend to be someone else. This phase is the heart of the game. Let your oratory talents shine, bluff, or tell the truth, but always be credible.

                            VI – The company votes.
                            Players must eliminate a player suspected of being a Competitor of the company. Upon the game master's signal, each player points their finger in the direction of the player they want to eliminate.
                            The player with the majority of votes is eliminated. The voice of the Project Manager counts double. In case of a tie, if present, the Project Manager's vote designates the victim.
                            Otherwise, the players vote again to break the tie (including the players in question).
                            If there is still a tie, no player is eliminated.
                            The eliminated player reveals their card and cannot communicate with other players in any way.

                            VII – The company is closed.
                            The game master says, "It's night, colleagues leave the company!", the players close their eyes. (Eliminated players remain silent, especially when they discover who the real Competitors are...).
                            The game resumes at the beginning of the normal round, step 1.

                            Now, you know the rules! Have fun!
                        </p>
                    </div>
                    <div>
                        <p>
                            6 players: 2 Colleagues, 1 Artistic Director, 1 HR Manager, 2 Competitors.

                            7 to 9 players: 1 Freelancer, 1 Colleague, 1 Artistic Director, 1 HR Manager, 2 Competitors, 1 Secretary, 1 Trainee.

                            10 to 13 players: 1 Freelancer, 2 Colleagues, 1 Artistic Director, 1 HR Manager, 3 Competitors, 1 Manipulator, 1 Secretary, 1 Communication Officer, 1 Dedicated Colleague.

                            13 players and more: 1 Freelancer, X Colleagues, 1 Artistic Director, 1 HR Manager, 4 Competitors, 1 Manipulator, 1 Secretary, 1 Communication Officer, 1 Trainee, 1 Dedicated Colleague, 1 Hacker.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RulesAndRoles;