import "@typespec/rest";
import "@azure-tools/typespec-azure-core";
import "./models-shared.tsp";

using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.Core;

namespace Translator.TextTranslation;

alias DictionaryBaseParameters = {
    ...CommonParameters;

    @query
    @doc("""
    Specifies the language of the input text.
    The source language must be one of the supported languages included in the dictionary scope.
    """)
    from: string;

    @query
    @doc("""
    Specifies the language of the output text.
    The target language must be one of the supported languages included in the dictionary scope.
    """)
    to: string;
};

@doc("Request parameters for the dictionary lookup API.")
model DictionaryLookupParamters {
    ...DictionaryBaseParameters;

    @body
    @doc("Array of the text to be sent to dictionary.")
    content: InputTextElement[];
}

@doc("Request paramters for the dictionary examples API.")
model DictionaryExamplesParamters {
    ...DictionaryBaseParameters;

    @body
    @doc("Array of the text to be sent to dictionary.")
    content: DictionaryExampleTextElement[];
}

@doc("Response for the dictionary lookup API.")
model DictionaryLookupResult {
    ...CommonResultHeaders;

    @body
    @doc("Array of the dictionary lookup elements.")
    result: DictionaryLookupElement[];
}

@doc("Response for the dictionary examples API.")
model DictionaryExamplesResult {
    ...CommonResultHeaders;

    @body
    @doc("Array of the dictionary examples elements.")
    result: DictionaryExampleElement[];
}

@doc("Element containing the text with translation.")
model DictionaryExampleTextElement extends InputTextElement {
    @doc("""
    A string specifying the translated text previously returned by the Dictionary lookup operation. 
    This should be the value from the normalizedTarget field in the translations list of the Dictionary 
    lookup response. The service will return examples for the specific source-target word-pair.
    """)
    translation: string;
}

@doc("Dictionary Lookup Element")
model DictionaryLookupElement {
    @doc("""
    A string giving the normalized form of the source term.
    For example, if the request is "JOHN", the normalized form will be "john".
    The content of this field becomes the input to lookup examples.
    """)
    normalizedSource: string;

    @doc("""
    A string giving the source term in a form best suited for end-user display.
    For example, if the input is "JOHN", the display form will reflect the usual
    spelling of the name: "John".
    """)
    displaySource: string;

    @doc("""
    A list of translations for the source term.
    """)
    translations: DictionaryTranslation[];
}

@doc("Translation source term.")
model DictionaryTranslation {
    @doc("""
    A string giving the normalized form of this term in the target language.
    This value should be used as input to lookup examples.
    """)
    normalizedTarget: string;

    @doc("""
    A string giving the term in the target language and in a form best suited
    for end-user display. Generally, this will only differ from the normalizedTarget
    in terms of capitalization. For example, a proper noun like "Juan" will have
    normalizedTarget = "juan" and displayTarget = "Juan".
    """)
    displayTarget: string;

    @doc("""
    A string associating this term with a part-of-speech tag.
    """)
    posTag: string;

    @doc("""
    A value between 0.0 and 1.0 which represents the "confidence" 
    (or perhaps more accurately, "probability in the training data") of that translation pair. 
    The sum of confidence scores for one source word may or may not sum to 1.0.
    """)
    confidence: float32;

    @doc("""
    A string giving the word to display as a prefix of the translation. Currently,
    this is the gendered determiner of nouns, in languages that have gendered determiners.
    For example, the prefix of the Spanish word "mosca" is "la", since "mosca" is a feminine noun in Spanish. 
    This is only dependent on the translation, and not on the source. 
    If there is no prefix, it will be the empty string.
    """)
    prefixWord: string;

    @doc("""
    A list of "back translations" of the target. For example, source words that the target can translate to.
    The list is guaranteed to contain the source word that was requested (e.g., if the source word being
    looked up is "fly", then it is guaranteed that "fly" will be in the backTranslations list).
    However, it is not guaranteed to be in the first position, and often will not be.
    """)
    backTranslations: BackTranslation[];
}

@doc("Back Translation")
model BackTranslation {
    @doc("""
    A string giving the normalized form of the source term that is a back-translation of the target.
    This value should be used as input to lookup examples.
    """)
    normalizedText: string;

    @doc("""
    A string giving the source term that is a back-translation of the target in a form best
    suited for end-user display.
    """)
    displayText: string;

    @doc("""
    An integer representing the number of examples that are available for this translation pair.
    Actual examples must be retrieved with a separate call to lookup examples. The number is mostly
    intended to facilitate display in a UX. For example, a user interface may add a hyperlink
    to the back-translation if the number of examples is greater than zero and show the back-translation
    as plain text if there are no examples. Note that the actual number of examples returned
    by a call to lookup examples may be less than numExamples, because additional filtering may be
    applied on the fly to remove "bad" examples.
    """)
    numExamples: int32;

    @doc("""
    An integer representing the frequency of this translation pair in the data. The main purpose of this
    field is to provide a user interface with a means to sort back-translations so the most frequent terms are first.
    """)
    frequencyCount: int32;
}

@doc("Dictionary Example element")
model DictionaryExampleElement {
    @doc("""
    A string giving the normalized form of the source term. Generally, this should be identical
    to the value of the Text field at the matching list index in the body of the request.
    """)
    normalizedSource: string;

    @doc("""
    A string giving the normalized form of the target term. Generally, this should be identical
    to the value of the Translation field at the matching list index in the body of the request.
    """)
    normalizedTarget: string;

    @doc("""
    A list of examples for the (source term, target term) pair.
    """)
    examples: Example[];
}

@doc("Dictionary Example")
model Example {
    @doc("""
    The string to concatenate before the value of sourceTerm to form a complete example.
    Do not add a space character, since it is already there when it should be.
    This value may be an empty string.
    """)
    sourcePrefix: string;

    @doc("""
    A string equal to the actual term looked up. The string is added with sourcePrefix
    and sourceSuffix to form the complete example. Its value is separated so it can be
    marked in a user interface, e.g., by bolding it.
    """)
    sourceTerm: string;

    @doc("""
    The string to concatenate after the value of sourceTerm to form a complete example.
    Do not add a space character, since it is already there when it should be.
    This value may be an empty string.
    """)
    sourceSuffix: string;

    @doc("""
    A string similar to sourcePrefix but for the target.
    """)
    targetPrefix: string;

    @doc("""
    A string similar to sourceTerm but for the target.
    """)
    targetTerm: string;

    @doc("""
    A string similar to sourceSuffix but for the target.
    """)
    targetSuffix: string;
}
