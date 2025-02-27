import React from 'react';

import { ApiTokenResource } from 'resource/apiToken';
import { Button } from 'ui/Button/Button';
import { CopyButton } from 'ui/CopyButton/CopyButton';
import { InfoButton } from 'ui/Button/InfoButton';
import './TokenCreation.scss';

interface IProps {
    uid: number;
}

export const TokenCreation: React.FunctionComponent<IProps> = () => {
    const [token, setToken] = React.useState<string | null>(null);
    const handleCreateNewApiAccessToken = React.useCallback(async () => {
        const { data } = await ApiTokenResource.create();
        setToken(data);
    }, []);

    return (
        <div className="TokenCreation flex-column">
            <div className="TokenCreation-text">
                {token
                    ? 'This is the only time you will be able to copy this token in plaintext.'
                    : 'Creating a new token will invalidate your old tokens.'}
            </div>
            <div className="TokenCreation-content">
                {token ? (
                    <div className="token-copy-button flex-row">
                        <CopyButton copyText={token} title="Copy" />
                        <InfoButton layout={['bottom']}>
                            <div>
                                <b>{'usage instructions'}</b>
                                <br />
                                <span>{'in request header, include:'}</span>
                                <br />
                                <span>{"'api-access-token': <token>"}</span>
                            </div>
                        </InfoButton>
                    </div>
                ) : (
                    <Button
                        title="Create a Token"
                        onClick={handleCreateNewApiAccessToken}
                    />
                )}
            </div>
        </div>
    );
};
