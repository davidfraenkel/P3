package com.p3.gruppe4.Handbook;

public class Handbook {
    public Handbook (){
        System.out.println("Handbook created");
    }

    public void manageTopic(HandbookOperation operation){
        switch (operation){
            case CREATE:
                System.out.println("CREATE");
                break;
            case DELETE:
                System.out.println("DELETE");
                break;
            case EDIT:
                System.out.println("EDIT");
                break;
        }
        System.out.println("Unfinished");
    }

    public void manageSubTopic(HandbookOperation operation){
        switch (operation){
            case CREATE:
                System.out.println("CREATE");
                break;
            case DELETE:
                System.out.println("DELETE");
                break;
            case EDIT:
                System.out.println("EDIT");
                break;
        }
        System.out.println("Unfinished");
    }
}
