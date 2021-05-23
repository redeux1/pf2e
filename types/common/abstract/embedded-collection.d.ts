declare module foundry {
    module abstract {
        /**
         * An extension of the Collection.
         * Used for the specific task of containing embedded Document instances within a parent Document.
         * @param sourceArray The source data array for the collection in the parent Document data
         */
        abstract class EmbeddedCollection<TDocument extends Document> extends utils.Collection<Embedded<TDocument>> {
            /** @override */
            constructor(
                sourceArray: TDocument['data']['_source'][],
                documentClass: {
                    new (data: TDocument['data']['_source'], context?: DocumentConstructorContext): TDocument;
                },
            );

            /** @override */
            set(key: string, value: TDocument, { modifySource }?: { modifySource?: boolean }): this;

            /** @override */
            delete(key: string, { modifySource }?: { modifySource?: boolean }): boolean;

            /** @override */
            toObject(source?: boolean): RawObject<TDocument['data']>[];
        }
    }
}
