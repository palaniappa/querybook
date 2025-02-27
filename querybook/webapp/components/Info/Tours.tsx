import * as React from 'react';

import { getAppName } from 'lib/utils/global';
import { navigateWithinEnv } from 'lib/utils/query-string';

import { Title } from 'ui/Title/Title';
import { Card } from 'ui/Card/Card';

import './Tours.scss';
import { useCreateDataDoc } from 'hooks/dataDoc/useCreateDataDoc';

export const Tours: React.FunctionComponent = () => {
    const handleDataDocTour = useCreateDataDoc(true);

    return (
        <div className="Tours m12">
            <Title subtitle className="mb12">
                Welcome to the {getAppName()} Tutorial!
            </Title>
            <Title subtitle size={5}>
                Click on a card to start the tutorial.
            </Title>
            <div className="Tours-cards flex-center mv24">
                <Card
                    title={`${getAppName()} Tour`}
                    onClick={() => navigateWithinEnv('/?tour=true')}
                >
                    General overview of {getAppName()} functionalities
                </Card>
                <Card title="DataDoc Tour" onClick={handleDataDocTour}>
                    Overview of DataDoc functionalities
                </Card>
            </div>
        </div>
    );
};
