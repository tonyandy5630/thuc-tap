import React from 'react';
import './styles.scss';
import { Typography } from 'antd';
import TutorialMenu from '@shared/components/TutorialMenuComponent';

const { Title } = Typography;

export default function TutorialPage() {
  return (
    <div className="tutorial-page-container">
      <TutorialMenu />
      <div className="tutorial-content">
        <Title level={3} style={{ color: '#FF7506' }}>
          Lorem ipsum dolor sit amet
        </Title>
        <Typography.Paragraph
          style={{
            height: '100%',
            overflow: 'auto',
            textAlign: 'left',
            color: 'white',
            padding: '0 10px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem.
          Cum eleifend bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere
          etiam diam sed lacus lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl eleifend
          lectus nunc massa aliquam, tellus in imperdiet. Malesuada suspendisse gravida tortor neque
          quis accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean. Facilisis scelerisque
          placerat eget lorem eget maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Platea sit placerat odio lorem. Cum eleifend bibendum ipsum quis scelerisque dui
          nibh odio id. Nam cras nec non posuere etiam diam sed lacus lacus. In eget morbi eros,
          vitae enim nunc, cursus. Nisl eleifend lectus nunc massa aliquam, tellus in imperdiet.
          Malesuada suspendisse gravida tortor neque quis accumsan et posuere. Ac turpis urna ipsum
          pretium nisi aenean. Facilisis scelerisque placerat eget lorem eget maecenas: Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem. Cum eleifend
          bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere etiam. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem. Cum
          eleifend bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem.
          Cum eleifend bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere
          etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio
          lorem. Cum eleifend bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non
          posuere etiam diam sed lacus lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl
          eleifend lectus nunc massa aliquam, tellus in imperdiet. Malesuada suspendisse gravida
          tortor neque quis accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean. Facilisis
          scelerisque placerat eget lorem eget maecenas. Sed ut perspiciatis unde omnis iste natus
          error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
          nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem.
          Cum eleifend bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere
          etiam diam sed lacus lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl eleifend
          lectus nunc massa aliquam, tellus in imperdiet. Malesuada suspendisse gravida tortor neque
          quis accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean. Facilisis scelerisque
          placerat eget lorem eget maecenas. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem. Cum eleifend
          bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere etiam. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem. Cum
          eleifend bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit placerat odio lorem.
          Cum eleifend bibendum ipsum quis scelerisque dui nibh odio id. Nam cras nec non posuere
          etiam diam sed lacus lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl eleifend
          lectus nunc massa aliquam, tellus in imperdiet. Malesuada suspendisse gravida tortor neque
          quis accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean. Facilisis scelerisque
          placerat eget lorem eget maecenas. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </Typography.Paragraph>
      </div>
    </div>
  );
}
