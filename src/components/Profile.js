const Section = ({ title, className, children } = props) => (
  <div className={className}>
    {title ? <h2>{title}</h2> : null}
    <ul>{children}</ul>
  </div>
);

const Item = ({ children, href, skill = 0 }) => {

  const style = {
    fontSize: skill ? 10 + skill : 14,
    color: skill ? '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6) : null
  }
  return (
    <li>
      {href ? <a href={href} style={style} className="item">{children}</a> : <span style={style} className="item">{children}</span>}
    </li>
  );
};

const instance = (
  <div className="profile">

    <h2 className="brand">
      <img className="avatar" src="/favicon.png" /> 郭小铭
    </h2>

    <Section className="vcard-details">
      <Item href="http://www.hypers.com"><IconFont icon="group" /> Hypers</Item>
      <Item href="https://github.com/simonguo"><IconFont icon="github-alt" /> simonguo</Item>
      <Item href="mailto:simonguo.2009@gmail.com"><IconFont icon="envelope-o" /> simonguo.2009@gmail.com</Item>
      <Item><IconFont icon="weixin" /> simonet</Item>
      <Item><IconFont icon="map-marker" /> Shanghai, China </Item>
    </Section>

    <Section title="Projects" className="list">
      <Item href="https://github.com/rsuite/rsuite">rsuite</Item>
      <Item href="https://github.com/rsuite/rsuite-table">rsuite-table</Item>
      <Item href="https://github.com/hypers/pagurian">pagurian</Item>
      <Item href="https://github.com/simonguo/f2edocs">f2edocs</Item>
      <Item href="https://github.com/hypers/JiraAgileApp">Jira Agile</Item>
    </Section>

    <Section title="Skills" className="list skills">
      <Item skill={10}>React</Item>
      <Item skill={7}>React Native</Item>
      <Item skill={10}>Redux</Item>
      <Item skill={10}>ES2015</Item>
      <Item skill={5}>NodeJS</Item>
      <Item skill={7}>CSS</Item>
      <Item skill={7}>LESS</Item>
      <Item skill={3}>PostCSS</Item>
      <Item skill={8}>Webpack</Item>
      <Item skill={9}>Grunt</Item>
      <Item skill={4}>Gulp</Item>
      <Item skill={11}>Javascript</Item>
      <Item skill={3}>ActionScript</Item>
      <Item skill={9}>Bootstrap</Item>
      <Item skill={1}>PHP</Item>
      <Item skill={1}>MySQL</Item>
      <Item skill={2}>C#</Item>
      <Item skill={2}>photoshop</Item>
      <Item skill={4}>QUnit</Item>
      <Item skill={1}>Mocha/Should/Chai/Expect</Item>
      <Item skill={5}>SeaJS/Require.js</Item>
      <Item skill={9}>jQuery</Item>
      <Item skill={9}>Immutable</Item>
      <Item skill={5}>SVG</Item>
      <Item skill={3}>Responsive Web</Item>

    </Section>

    <Section title="Links" className="list">
      <Item href="http://www.5kun.com/">5KUN DESIGN</Item>
      <Item href="http://www.bogoor.com/">博格设计</Item>
      <Item href="http://www.smohan.net/">水墨寒的博客</Item>
      <Item href="http://www.wduw.com/">老岩的布拉格</Item>
      <Item href="http://byameato.sxl.cn/">By Ameato</Item>
      <Item href="http://www.hypers.com/">HYPERS</Item>
    </Section>
  </div>
);

ReactDOM.render(instance, mountNode);
