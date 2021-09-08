# Automatic Merge Conflict Resolution Tools: The Current State and Barriers to Adoption
Replication package for the ICSE 2022 technincal track submission


## Running Merge Conflict Tools
Use the following instructions to run the tools used in our paper and replicate results in RQ1.

#### JDime

Instructions to run JDime can be found at: https://github.com/se-sic/jdime

To replicate results in the paper run JDime with the following options:

``` JDime -m semistructured {Left} {Base} {Right} -o {Merged File}  ```

#### AutoMerge

Instructions to run AutoMerge can be found at: https://github.com/thufv/automerge

To replicate results in the paper run AutoMerge with the following options:

``` java -jar AutoMerge.jar -e {User resolved file} -o {Merged File} -m structured -f -S {left} {base} {right} -K 3```

#### IntelliMerge 

Instructions to run IntelliMerge can be found at: https://github.com/Symbolk/IntelliMerge

To replicate results in the paper run IntelliMerge with the following options:

``` java -jar IntelliMerge-1.0.9.jar -d {Left} {Base} {Right} -o {Merged File} -s false ```

#### MergeBert

Contact the authors of MergeBert for access to the model: https://arxiv.org/abs/2109.00084

We run MergeBert with default options:

``` MergeBert --path_to_data {Directory with left/base/right} --extensions {file extensions} ```

## Survey and Guided Interviews

#### Survey Data

All survey data can be found in the /Survey Data/ folder:

https://github.com/ICSE-2022-Submission/Automatic-Merge-Conflict-Resolution-Tools/tree/main/Survey%20Data

The folder contains two JSON files containing the survey responses and conflicts shown to participants in the survey interface. The folder also contains the data schema for the conflicts and responses. 


#### Survey Questions
Participants completed survey questions during guided the interviews. Survey responses are recorded and shared in /Survey Data/responses.json. Participant's Github usernames and survey open-responses are redacted to maintain anonymity.  For each conflict in a file, participants evaluate automatically generated conflict resolution suggestions. Participants either mark a resolution as acceptable, indicate that none of the suggestions are acceptable, or elect to skip the conflcit entirely.


Depending on the scenario, the participants respond to the follow questions.

|                                          | Survey Questions                                                                                                                                                                              |   
|------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Suggestion is acceptable                 | 1) Is this suggestion semantically equivalent to the user resolution? 2) Did the order of appearance of different statements play a factor in why you chose this suggestion? 3) Open Response |   
| Suggestions are not acceptable           | 1) Is any external context needed in order to correctly resolve this conflict? 2) Open response                                                                                               |   
| If additional code is added              | Is the added code necessary in order to correctly resolve the merge conflict?                                                                                                              |   
| If conflict is resolved by taking A or B | Why are the changes from the other branch not used to resolve the conflict?                                                                                                                |   
| Skip this conflict                       | Multi-select option to explain why and open response                                                                                                                                          |   

#### Survey Flow 
After obtaining consent, each participant is asked to watch an innstructional video in the survey interface. Video is not shared to maintain author anonymity. 

1. Each participant is shown a customized task list, based on merge conflicts they recently resolved.

    <img width="600" alt="Tasklist" src="https://user-images.githubusercontent.com/59992163/132571090-af934848-2f0c-434f-8b72-b8fc9cdc90c0.png">

2. Participants can view the conflict file, their original resolution, as well as the automatic resolution suggestions in a diff view. 
    <img width="600" alt="diffview" src="https://user-images.githubusercontent.com/59992163/132569329-f4845f67-7522-485a-a86b-1fa3d673b9c0.png">


3. Participants respond to survey questions in the interface. Guided interview questions are asked by one of the authors after participants complete the survey questions.

   <img width="600" alt="SelectSuggestion" src="https://user-images.githubusercontent.com/59992163/132569576-82d550e6-182f-4240-89c6-615985802f3c.png">
   <img width="600" alt="skipconflict" src="https://user-images.githubusercontent.com/59992163/132570317-babaca8a-8a33-4483-b99a-570709803d92.png">
