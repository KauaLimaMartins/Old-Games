import React, { useCallback, useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { useDropzone } from 'react-dropzone';

import { Container, ContainerLine } from './styles';

interface Props {
    onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
    const [selectedFileUrl, setSelectedFileUrl] = useState('');

    const onDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];

            try {
                const fileUrl = URL.createObjectURL(file);

                setSelectedFileUrl(fileUrl);
                onFileUploaded(file);
            } catch (err) {
                alert('Apenas imagens .png .jpg e .jpeg são permitidas');
            }
        },
        [onFileUploaded]
    );

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/png, image/jpg, image/jpeg',
    });

    return (
        <Container {...getRootProps()}>
            <input {...getInputProps()} accept="image/*" />
            {selectedFileUrl !== '' ? (
                <img src={selectedFileUrl} />
            ) : (
                <ContainerLine>
                    <FiUpload size={26} color="#FFF" />
                    <p>
                        Arraste e solte a foto do game ou <br />
                        clique para selecionar de forma manual
                    </p>
                    <p>(apenas .png .jpg ou .jpeg)</p>
                </ContainerLine>
            )}
        </Container>
    );
};

export default Dropzone;
