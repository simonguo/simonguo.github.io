const Section = ({ title, className, children } = props) => (
    <div className={className}>
        {title ? <h2>{title}</h2> : null}
        <ul>{children}</ul>
    </div>
);

const Item = ({ children, href } = props) => (
    <li>
        {href ? <a href={href} className="item">{children}</a> : <span className="item">{children}</span>}
    </li>
);

const instance = (
    <div className="profile">
        <Typist>
        
            <h1>郭小铭</h1>
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
            </Section>

            <Section title="Skills" className="list">
                <Item>Javascript/ES2015</Item>
                <Item>React/Redux</Item>
                <Item>Node</Item>
                <Item>CSS/LESS</Item>
                <Item>PHP</Item>
                <Item>Webpack/Grunt/Gulp</Item>
                <Item>ActionScript</Item>
                <Item>MySql</Item>
                <Item>Photoshop</Item>
            </Section>

            <Section title="Links" className="list">
                <Item href="http://www.5kun.com/">5KUN DESIGN</Item>
                <Item href="http://www.bogoor.com/">博格设计</Item>
                <Item href="http://www.smohan.net/">水墨寒的博客</Item>
                <Item href="http://www.wduw.com/">老岩的布拉格</Item>
                <Item href="http://byameato.sxl.cn/">By Ameato</Item>
            </Section>
        </Typist>

    </div>
);

ReactDOM.render(instance, mountNode);
