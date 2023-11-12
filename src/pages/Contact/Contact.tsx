import React from 'react';
import './Contact.scss';

const Contact: React.FC = () => {
  return (
    <div className="contactPage">
      <div className="contact_info">
        Hi, my name is Eugene Nikitin, I am a video director and photographer with experience in
        working on non-standard projects in the media sphere. My projects live their life on the
        internet, are celebrated by festivals and published on{' '}
        <a
          href="https://directorslibrary.com/08/2022/latest/campaigns/archive-prints-bewithari/"
          target="blank"
        >
          directorslibrary.com.
        </a>{' '}
        In my projects I like to mix industry familiar visual solutions and new approaches to image
        creation. I like to make the communication between autor and viewer vivid and clear. So I
        hope to see you around 💥
      </div>
      <div className="spacer" />
      <div className="contact_info">
        Salve, mi chiamo Eugene Nikitin, sono un regista video e fotografo con esperienza di lavoro
        su progetti non standard nella sfera dei media. I miei progetti vivono su Internet, sono
        celebrati da festival e pubblicati su{' '}
        <a
          href="https://directorslibrary.com/08/2022/latest/campaigns/archive-prints-bewithari/"
          target="blank"
        >
          directorslibrary.com.
        </a>{' '}
        Nei miei progetti mi piace mescolare soluzioni visive familiari all'industria e nuovi
        approcci alla creazione di immagini. Mi piace rendere vivida e chiara la comunicazione tra
        autore e spettatore. Spero quindi di vedervi in giro 💥
      </div>
      <div className="spacer" />
      <div className="contact_info">
        Bonjour, je m'appelle Eugene Nikitin. Je suis vidéaste et photographe et j'ai l'habitude de
        travailler sur des projets atypiques dans le domaine des médias. Mes projets sont diffusés
        sur l'internet, ont été salués lors de festivals du film et publiés sur
        <a
          href="https://directorslibrary.com/08/2022/latest/campaigns/archive-prints-bewithari/"
          target="blank"
        >
          directorslibrary.com.
        </a>{' '}
        Dans mes projets, j'aime mélanger des solutions visuelles familières à l'industrie avec de
        nouvelles approches cinématographiques. J'aime que la communication entre l'auteur et le
        spectateur soit claire et nette. J'espère vous voir💥
      </div>
    </div>
  );
};

export default Contact;
